package de.saio.dms

import org.springframework.data.annotation.Id
import org.springframework.data.domain.Sort
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/jokes")
class JokeResource (private val jokeRepository: JokeRepository) {

    @GetMapping("/random")
    fun getRandomJoke() = jokeRepository.findAll().random()

    @PostMapping
    fun createJoke(@RequestBody joke: Joke) = jokeRepository.save(joke)

    @GetMapping("/popular")
    fun retrieveMostPopularJokes() = jokeRepository.findAll(Sort.by("popularity").descending()).take(5)

    @GetMapping
    fun searchForJokes(@RequestParam phrase: String) = jokeRepository.findByPhraseLike(phrase).sortedByDescending { it.popularity }.take(10)

    @PutMapping("{jokeId}/vote")
    fun vote (@PathVariable jokeId: String) {
        val jokeForVoteUp = jokeRepository.findById(jokeId)
        jokeForVoteUp.orElseThrow { JokeDoesNotExistException("Joke with id: $jokeId not found.") } .voteUp()
        jokeRepository.save(jokeForVoteUp.get())
    }
}

data class Joke (@Id val id: String?, val phrase: String, var popularity: Long = 1, var author: String) {

    init {
        if(author.isNullOrEmpty()){
            author = "Anonymous"
        }
    }

    fun voteUp() { this.popularity = this.popularity + 1}
}