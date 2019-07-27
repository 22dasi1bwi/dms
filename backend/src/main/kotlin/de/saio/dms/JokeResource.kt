package de.saio.dms

import org.springframework.data.annotation.Id
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/jokes")
class JokeResource (private val jokeRepository: JokeRepository) {

    @GetMapping("/random")
    fun getRandomJoke() = jokeRepository.findAll().random()

    @PostMapping
    fun createJoke(@RequestBody joke: Joke) = jokeRepository.save(joke)

    @GetMapping("/likes")
    fun retrieveMostLikedJokes() = jokeRepository.findAll().sortedByDescending { it.likes }.take(5)

    @GetMapping
    fun searchForJokes(@RequestParam phrase: String) = jokeRepository.findByPhraseLike(phrase).sortedByDescending { it.likes }.take(5)

    @PutMapping("{jokeId}/like")
    fun likeJoke (@PathVariable jokeId: String): Joke {
        val jokeForVoteUp = jokeRepository.findById(jokeId)
        jokeForVoteUp.orElseThrow { JokeDoesNotExistException("Joke with id: $jokeId not found.") } .like()
        return jokeRepository.save(jokeForVoteUp.get())
    }
}

data class Joke (@Id val id: String?, val phrase: String, var likes: Long = 1, var author: String) {

    init {
        if(author.isNullOrEmpty()){
            author = "Anonymous"
        }
    }

    fun like() { this.likes = this.likes + 1}
}