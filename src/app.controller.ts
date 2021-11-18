import { Controller, Get, Module } from "@nestjs/common";

@Controller("/app")
export class AppController {
    @Get("/siva")
    getRootRoute() {
        return "aum namah sivaya"
    }

    @Get("/shambho")
    getByeThere() {
        return "hara hara"
    }
}
