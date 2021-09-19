module Helpers exposing
    ( goldenRatio
    , margin
    , maxPageWidth
    , toChartHeight
    , toChartWidth
    )


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
    4
        |> (//) width
        |> toFloat


toChartHeight : Float -> Float
toChartHeight width =
    goldenRatio
        |> (/) width
        |> round
        |> toFloat


margin : { top : Float, right : Float, left : Float, bottom : Float }
margin =
    { top = 5, right = 20, bottom = 20, left = 40 }
