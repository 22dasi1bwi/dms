package de.saio.dms

import org.springframework.data.annotation.Id
import org.springframework.data.domain.Sort
import org.springframework.web.bind.annotation.*
import java.lang.IllegalArgumentException

@RestController
@RequestMapping("/api/jokes")
class DmsResource (private val jokeRepository: JokeRepository) {

    @GetMapping("/random")
    fun getRandomJoke() = jokeRepository.findAll().random()

    @PostMapping
    fun createJoke(@RequestBody joke: Joke) = jokeRepository.save(joke)

    @GetMapping("/popular")
    fun retrieveMostPopularJokes() = jokeRepository.findAll(Sort.by("popularity").descending()).take(5)

    @GetMapping
    fun searchForJokes(@RequestParam phrase: String) = jokeRepository.findByPhraseLike(phrase).sortedByDescending { it.popularity }.take(10)

    @PutMapping("/{jokeId}/vote")
    fun vote (@PathVariable("jokeId") jokeId: String) : Joke {
        val jokeForVoteUp = jokeRepository.findById(jokeId)
        jokeForVoteUp.orElseThrow { IllegalArgumentException("Joke with id $jokeId not found.") } .voteUp()
        return jokeRepository.save(jokeForVoteUp.get())
    }
}

data class Joke (@Id val id: String, val phrase: String, var popularity: Long) {

    fun voteUp() { this.popularity = this.popularity + 1}
}