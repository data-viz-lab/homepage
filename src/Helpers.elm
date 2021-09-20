module Helpers exposing
    ( goldenRatio
    , margin
    , marginWithLabel
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
    { top = 10, right = 20, bottom = 20, left = 40 }


marginWithLabel : { top : Float, right : Float, left : Float, bottom : Float }
marginWithLabel =
    { top = 10, right = 90, bottom = 20, left = 40 }
