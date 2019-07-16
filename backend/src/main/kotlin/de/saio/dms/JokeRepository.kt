package de.saio.dms

import org.springframework.data.mongodb.repository.MongoRepository

interface JokeRepository : MongoRepository<Joke, String> {

    fun findByPhraseLike(phrase: String) : List<Joke>
}