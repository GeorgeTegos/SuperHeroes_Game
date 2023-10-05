package com.example.trump_cards.controllers;

import com.example.trump_cards.models.Card;
import com.example.trump_cards.repositories.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CardController {
    @Autowired
    private CardRepository cardRepository;

    @GetMapping(value = "/cards")
    public List<Card> getCards(){
        return cardRepository.findAll();

    }
}
