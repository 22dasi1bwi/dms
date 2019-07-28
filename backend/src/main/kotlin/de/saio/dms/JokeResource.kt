package de.saio.dms

import org.springframework.data.annotation.Id
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/jokes")
class JokeResource (private val jokeRepository: JokeRepository) {

    @GetMapping("/random")
    fun getRandomJoke() = ResponseEntity.status(HttpStatus.OK).body(jokeRepository.findAll().randomElement())

    @PostMapping
    fun createJoke(@RequestBody joke: Joke) = ResponseEntity.status(HttpStatus.CREATED).body(jokeRepository.save(joke))

    @GetMapping("/likes")
    fun retrieveMostLikedJokes() = ResponseEntity.status(HttpStatus.OK).body(jokeRepository.findAll().sortedByDescending { it.likes }.take(5))

    @GetMapping
    fun searchForJokes(@RequestParam phrase: String) = ResponseEntity.status(HttpStatus.OK).body(jokeRepository.findByPhraseLike(phrase).sortedByDescending { it.likes }.take(5))

    @PutMapping("{jokeId}/like")
    fun likeJoke (@PathVariable jokeId: String): ResponseEntity<Joke> {
        val jokeForVoteUp = jokeRepository.findById(jokeId)
        jokeForVoteUp.orElseThrow { JokeDoesNotExistException("Joke with id: $jokeId not found.") } .like()
        return ResponseEntity.status(HttpStatus.OK).body(jokeRepository.save(jokeForVoteUp.get()))
    }
}

internal const val DEFAULT_AUTHOR = "Anonymous"
data class Joke (@Id val id: String?, val phrase: String, var likes: Long = 1, var author: String) {


    init {
        if(author.isNullOrEmpty()){
            author = DEFAULT_AUTHOR
        }
    }

    fun like() { this.likes = this.likes + 1}
}

private fun List<*>.randomElement () = if (this.isEmpty()) null else this.random()
