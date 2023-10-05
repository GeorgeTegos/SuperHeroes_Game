package com.example.trump_cards.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashMap;

@Document(collection = "cards")
public class Card {

    @Id
    private String id;
    private String name;
    private HashMap<String, String> powerstats;
    private HashMap<String, String> image;
    private String universe;

    public Card(String name,
                HashMap<String, String> powerstats,
                HashMap<String, String> image,
                String universe) {
        this.name = name;
        this.powerstats = powerstats;
        this.image = image;
        this.universe = universe;
    }

    public String getId() {
        return id;
    }

    public void setIntelligence(String amount){
        this.powerstats.put("intelligence",amount);
    }
    public void setStrength(String amount){
        this.powerstats.put("strength",amount);
    }
    public void setSpeed(String amount){
        this.powerstats.put("speed",amount);
    }
    public void setDurability(String amount){
        this.powerstats.put("durability",amount);
    }
    public void setPower(String amount){
        this.powerstats.put("power",amount);
    }
    public void setCombat(String amount){
        this.powerstats.put("combat",amount);
    }

    public String getIntelligence(){
        return this.powerstats.get("intelligence");
    }
    public String getStrength(){
        return this.powerstats.get("strength");
    }
    public String getSpeed(){
        return this.powerstats.get("speed");
    }
    public String getDurability(){
        return this.powerstats.get("durability");
    }
    public String getPower(){
        return this.powerstats.get("power");
    }
    public String getCombat(){
        return this.powerstats.get("combat");
    }

    public void setUrlImage(String url){
        this.image.put("url",url);
    }
    public void setOtherImage(String keyOfImage, String url){
        this.image.put(keyOfImage,url);
    }

    public String getUrlImage(){
        return this.image.get("url");
    }
    public String getOtherImage(String key){
        if (this.image.containsKey(key)) {
            return this.image.get(key);
        }else {
            return "Wrong Image Key";
        }

    }


    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public HashMap<String, String> getPowerstats() {
        return powerstats;
    }

    public void setPowerstats(HashMap<String, String> powerstats) {
        this.powerstats = powerstats;
    }

    public HashMap<String, String> getImage() {
        return image;
    }

    public void setImage(HashMap<String, String> image) {
        this.image = image;
    }

    public String getUniverse() {
        return universe;
    }

    public void setUniverse(String universe) {
        this.universe = universe;
    }

    public Card(){


    }
}
