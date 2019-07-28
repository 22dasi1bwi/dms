package de.saio.dms

import io.mockk.every
import io.mockk.impl.annotations.InjectMockKs
import io.mockk.mockk
import org.assertj.core.api.Assertions.assertThat
import org.assertj.core.api.Assertions.assertThatExceptionOfType
import org.junit.jupiter.api.Test
import java.util.*

class JokeResourceUnitTest {

    private var jokeRepository: JokeRepository = mockk()

    @InjectMockKs
    private var cut = JokeResource(jokeRepository)

    @Test
    fun `randomJokeReturnsEmptyBodyIfNoElementsAreInTheDatabase`() {
        every { jokeRepository.findAll() } returns listOf()

        val response = cut.getRandomJoke()

        assertThat(response.body).isEqualTo(null)
    }

    @Test
    fun `randomJokeReturnsARandomElement`() {
        val jokeOne = Joke("id-one", "phrase-one", 10, "sda")
        val jokeTwo = Joke("id-two", "phrase-two", 10, "sda")

        val jokes = listOf(jokeOne, jokeTwo)
        every { jokeRepository.findAll() } returns jokes

        val response = cut.getRandomJoke()
        val randomJoke = response.body as Joke

        assertThat(listOf(randomJoke)).containsAnyElementsOf(jokes)
    }

    @Test
    fun `createJokeReturnsTheJokeCreated`(){
        val inputJoke = Joke("", "phrase", 10, "sda")
        val responseJoke = Joke("generatedId", "phrase", 10, "sda")
        every { jokeRepository.save(inputJoke) } returns responseJoke

        val response = cut.createJoke(inputJoke)

        assertThat(response.body).isEqualTo(responseJoke)
    }

    @Test
    fun `getMostLikedJokesReturnsJokesWithLikesInDescendingOrder`(){
        val jokeOne = Joke("id-one", "phrase-one", 8, "sda")
        val jokeTwo = Joke("id-two", "phrase-two", 10, "sda")
        every { jokeRepository.findAll() } returns listOf(jokeOne, jokeTwo)

        val response = cut.retrieveMostLikedJokes()

        assertThat(response.body).containsExactly(jokeTwo, jokeOne)
    }

    @Test
    fun `getMostLikedJokesReturnsJokesWithLimit`(){
        val jokeOne = Joke("id-one", "phrase-one", 8, "sda")
        val jokeTwo = Joke("id-two", "phrase-two", 10, "sda")
        val jokeThree = Joke("id-three", "phrase-three", 20, "sda")
        val jokeFour = Joke("id-four", "phrase-four", 2, "sda")
        val jokeFive = Joke("id-five", "phrase-five", 4, "sda")
        val jokeSix = Joke("id-six", "phrase-six", 9, "sda")
        every { jokeRepository.findAll() } returns listOf(jokeOne, jokeTwo, jokeThree, jokeFour, jokeFive, jokeSix)

        val response = cut.retrieveMostLikedJokes()

        assertThat(response.body).containsOnly(jokeOne, jokeTwo, jokeThree, jokeFive, jokeSix)
    }

    @Test
    fun `searchJokesReturnsJokesWithLikesInDescendingOrder`(){
        val jokeOne = Joke("id-one", "phrase-one", 8, "sda")
        val jokeTwo = Joke("id-two", "phrase-two", 10, "sda")
        val searchPhrase = "phrase"
        every { jokeRepository.findByPhraseLike(searchPhrase) } returns listOf(jokeOne, jokeTwo)

        val response = cut.searchForJokes(searchPhrase)

        assertThat(response.body).containsExactly(jokeTwo, jokeOne)
    }

    @Test
    fun `searchJokesReturnsJokesWithLimit`(){
        val jokeOne = Joke("id-one", "phrase-one", 8, "sda")
        val jokeTwo = Joke("id-two", "phrase-two", 10, "sda")
        val jokeThree = Joke("id-three", "phrase-three", 20, "sda")
        val jokeFour = Joke("id-four", "phrase-four", 2, "sda")
        val jokeFive = Joke("id-five", "phrase-five", 4, "sda")
        val jokeSix = Joke("id-six", "phrase-six", 9, "sda")
        val searchPhrase = "phrase"
        every { jokeRepository.findByPhraseLike(searchPhrase) } returns listOf(jokeOne, jokeTwo, jokeThree, jokeFour, jokeFive, jokeSix)

        val response = cut.searchForJokes(searchPhrase)

        assertThat(response.body).containsOnly(jokeOne, jokeTwo, jokeThree, jokeFive, jokeSix)
    }

    @Test
    fun `likeJokeThrowsOnNotExistingJokeId`() {
        val jokeId = "id"
        every { jokeRepository.findById(jokeId) } returns Optional.empty()

        assertThatExceptionOfType(JokeDoesNotExistException::class.java).isThrownBy { cut.likeJoke(jokeId) }
    }

    @Test
    fun `likeJokeIncreasesLikesOfJokeByOne`() {
        val jokeId = "id"
        val joke = Joke(jokeId, "phrase", 8, "sda")
        every { jokeRepository.findById(jokeId) } returns Optional.of(joke)
        every { jokeRepository.save(ofType(Joke::class)) } returnsArgument 0

        val response = cut.likeJoke(jokeId)

        assertThat((response.body as Joke).likes).isEqualTo(joke.likes ++)
    }
}
