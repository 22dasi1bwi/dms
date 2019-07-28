package de.saio.dms

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

class JokeUnitTest {

    @Test
    fun `defaultsToAnonymousAuthorOnEmptyAuthor`(){
        val joke = Joke("id", "phrase", 10, "")

        assertThat(joke.author).isEqualTo(DEFAULT_AUTHOR)
    }
}