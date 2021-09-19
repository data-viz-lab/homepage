module Helpers exposing
    ( codePrev
    , goldenRatio
    , margin
    , maxPageWidth
    , toChartHeight
    , toChartWidth
    )

import Html exposing (Html)
import Html.Attributes as Attributes


goldenRatio : Float
goldenRatio =
    1.618


maxPageWidth : Int
maxPageWidth =
    1400


toChartWidth : Int -> Float
toChartWidth pageWidth =
    let
        width =
            if pageWidth > maxPageWidth then
                maxPageWidth

            else
                pageWidth
    in
    width
        |> toFloat
        |> (*) 0.333


toChartHeight : Float -> Float
toChartHeight width =
    goldenRatio
        |> (/) width
        |> round
        |> toFloat


margin : { top : Float, right : Float, left : Float, bottom : Float }
margin =
    { top = 5, right = 20, bottom = 20, left = 40 }


codePrev : String -> Html msg
codePrev content =
    Html.div [ Attributes.class "example__code-prev" ]
        [ Html.code [ Attributes.class "terminal" ]
            [ Html.pre []
                [ Html.text content ]
            ]
        ]
