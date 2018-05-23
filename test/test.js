var expect = require('chai').expect;
var route = require("../routes/html-routes");
var express = require("express");
var app = express();

describe("Testing routes", function () {
	it("home page should load", function () {
		app.get("/"), function (html) {
			expect(html).to.be.ok;
		}  
	});

	it("menu page should load", function () {
		app.get("/menu"), function (html) {
			expect(html).to.be.ok;
		}  
	});

	it("character_creator page should load", function () {
		app.get("/character_creator"), function (html) {
			expect(html).to.be.ok;
		}  
	});

	it("character_selector page should load", function () {
		app.get("/character_selector"), function (html) {
			expect(html).to.be.ok;
		}  
	});

	it("fight_screen page should load", function () {
		app.get("/fight_screen"), function (html) {
			expect(html).to.be.ok;
		}  
	});

	it("game_over page should load", function () {
		app.get("/game_over"), function (html) {
			expect(html).to.be.ok;
		}  
	});

})