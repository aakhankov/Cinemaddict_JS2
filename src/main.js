import { filmsSelectionTemplate } from "./view/films";
import { menuTemplate } from "./view/menu";
import { creativeMovieCardTemplate } from "./view/movie-card";
import { popupTemplate } from "./view/popup";
import { showMoreButtonTemplate } from "./view/show-more-button";
import { userRunkTemplate } from "./view/user-rank";

const header = document.querySelector(".header");
const mainElement = document.querySelector(".main");

const render = (container, template, place) => {
	container.insertAdjacentHTML(place, template);
};

render(header, userRunkTemplate(), "beforeend");
render(mainElement, menuTemplate(), "beforeend");
render(mainElement, filmsSelectionTemplate(), "beforeend");

const filmsSelectionElement = document.querySelector(".films");
const FILMS_CARDS_COUNT = 5;


for (let i = 0; i < FILMS_CARDS_COUNT; i++) {
	render(filmsSelectionElement, creativeMovieCardTemplate(), "beforeend");
}

render(filmsSelectionElement, creativeMovieCardTemplate(), "beforeend");
render(filmsSelectionElement, showMoreButtonTemplate(), "beforeend");
render(filmsSelectionElement, creativeMovieCardTemplate(), "beforeend");
render(filmsSelectionElement, creativeMovieCardTemplate(), "beforeend");
render(document.body, popupTemplate(), "beforeend");
