#[macro_use] extern crate rocket;

mod database;

#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
}

#[get("/background")]
fn background() -> &'static str {
    database::read()
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index,background])
}