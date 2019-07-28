package de.saio.dms

import com.fasterxml.jackson.databind.ObjectMapper
import io.mockk.every
import io.mockk.mockk
import io.mockk.verify
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.boot.test.context.TestConfiguration
import org.springframework.context.annotation.Bean
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
import java.util.*

@WebMvcTest(JokeResource::class)
class JokeResourceIntTest(@Autowired val mvc: MockMvc, @Autowired val mapper: ObjectMapper) {

    @Autowired
    private lateinit var jokeRepository : JokeRepository

    @Test
    fun `getRandomJoke`() {
        every { jokeRepository.findAll() } returns listOf()

        mvc.perform(get("/api/jokes/random"))
                .andExpect(status().isOk)
    }

    @Test
    fun `createJoke`() {
        val joke = Joke("", "phrase", 15, "sda")
        every { jokeRepository.save(joke) } returns joke

        mvc.perform(post("/api/jokes")
                .contentType(MediaType.APPLICATION_JSON)
                .content(mapper.writeValueAsString(joke)))
                .andExpect(status().isCreated)
                .andExpect(jsonPath("$.phrase").value(joke.phrase))
                .andExpect(jsonPath("$.likes").value(joke.likes))
                .andExpect(jsonPath("$.author").value(joke.author))
    }

    @Test
    fun `getMostLikedJokes`() {
        every { jokeRepository.findAll() } returns listOf()

        mvc.perform(get("/api/jokes/likes"))
                .andExpect(status().isOk)
    }

    @Test
    fun `searchJokes`() {
        val phraseToSearch = "a phrase"
        every { jokeRepository.findByPhraseLike(phraseToSearch) } returns listOf()

        mvc.perform(get("/api/jokes").param("phrase", phraseToSearch))
                .andExpect(status().isOk)
    }

    @Test
    fun `likeJoke`() {
        val id = "anId"
        val joke = Joke(id, "a phrase", 15, "sda")
        every { jokeRepository.findById(id) } returns Optional.of(joke)
        every { jokeRepository.save(joke) } .returnsArgument(0)

        mvc.perform(put("/api/jokes/{jokeId}/like", id))
                .andExpect(status().isOk)
                .andExpect(jsonPath("$.likes").value(joke.likes ++))
    }
    @Test
    fun `onNotExistingLikedJokeExceptionIsMapped`() {
        val id = "anId"
        every { jokeRepository.findById(id) } returns Optional.empty()

        mvc.perform(put("/api/jokes/{jokeId}/like", id))
                .andExpect(status().isNotFound)

        verify(exactly = 0) { jokeRepository.save(ofType(Joke::class)) }
    }

    @TestConfiguration
    class ControllerTestConfig {
        @Bean
        fun jokeRepository() = mockk<JokeRepository>()
    }
}