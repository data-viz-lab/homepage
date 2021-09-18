module Main exposing (..)

import Bar
import Browser
import Html exposing (Html)
import Html.Attributes exposing (class)



-- MODEL


type alias Model =
    { width : Int, height : Int }



-- UPDATE


type Msg
    = NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )



-- VIEW


view : Model -> Html Msg
view model =
    Html.div []
        [ Bar.verticalGrouped
        ]



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.batch
        []



-- INIT


init : { width : Int, height : Int } -> ( Model, Cmd Msg )
init { width, height } =
    ( { width = width, height = height }, Cmd.none )



-- MAIN


main =
    Browser.element
        { init = init
        , subscriptions = subscriptions
        , update = update
        , view = view
        }
