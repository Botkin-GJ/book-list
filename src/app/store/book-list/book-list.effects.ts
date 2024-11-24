import { Injectable } from "@angular/core";
import { BookRestService } from "../../services/book-rest.service";
import { Actions } from "@ngrx/effects";

@Injectable()
export class BookListEffects {

    constructor(
        readonly actions$: Actions,
        readonly bookListRest: BookRestService
    ) { }
}