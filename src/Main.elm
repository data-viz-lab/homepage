module Main exposing (..)

import Bar
import Browser
import Helpers
import Html exposing (Html)
import Html.Attributes as Attributes
import Line



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
        , exampleView (Line.view model) model
        ]


introView : Model -> Html Msg
introView model =
    Html.section [ Attributes.class "intro" ]
        [ Html.h1 [] [ Html.text "elm-chart-builder" ]
        , Html.h2 [] [ Html.text "Accessible and easy to create charts in elm" ]
        ]


exampleView : List (Html Msg) -> Model -> Html Msg
exampleView content model =
    let
        height =
            model.width
                |> Helpers.toChartWidth
                |> Helpers.toChartHeight
                |> (*) 1.2
                |> String.fromFloat
    in
    Html.section
        [ Attributes.class "example"
        , Attributes.style "height" (height ++ "px")
        ]
        content



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
