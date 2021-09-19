module Main exposing (..)

import Bar
import Browser
import Html exposing (Html)
import Html.Attributes as Attributes



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
    Html.div [ Attributes.class "content" ]
        [ introView model
        , exampleView (Bar.view model) model
        ]


introView : Model -> Html Msg
introView model =
    Html.section [ Attributes.class "intro" ]
        [ Html.h1 [] [ Html.text "elm-chart-builder" ]
        , Html.h2 [] [ Html.text "Easy to create and accessible charts in elm" ]
        ]


exampleView : List (Html Msg) -> Model -> Html Msg
exampleView content model =
    Html.section [ Attributes.class "example" ] content



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
