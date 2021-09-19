module Bar exposing (view)

import Axis
import Chart.Bar as Bar
import Color exposing (Color, rgb255)
import Constants
import FormatNumber
import FormatNumber.Locales exposing (Decimals(..), usLocale)
import Html exposing (Html)
import Html.Attributes as Attributes
import Scale.Color


colorScheme : List Color
colorScheme =
    Scale.Color.tableau10


type alias Data =
    { x : String, y : Float, groupLabel : String }


data : List Data
data =
    [ { groupLabel = "A"
      , x = "a"
      , y = 1000
      }
    , { groupLabel = "A"
      , x = "b"
      , y = 1300
      }
    , { groupLabel = "A"
      , x = "c"
      , y = 1600
      }
    , { groupLabel = "B"
      , x = "a"
      , y = 1100
      }
    , { groupLabel = "B"
      , x = "b"
      , y = 2300
      }
    , { groupLabel = "B"
      , x = "c"
      , y = 1600
      }
    ]


accessor : Bar.Accessor Data
accessor =
    Bar.Accessor (.groupLabel >> Just) .x .y


toWidth : Int -> Float
toWidth pageWidth =
    let
        width =
            if pageWidth > Constants.maxPageWidth then
                Constants.maxPageWidth

            else
                pageWidth
    in
    4
        |> (//) width
        |> toFloat


toHeight : Float -> Float
toHeight width =
    Constants.goldenRatio
        |> (/) width
        |> round
        |> toFloat


valueFormatter : Float -> String
valueFormatter =
    FormatNumber.format { usLocale | decimals = Exact 0 }


yAxis : Bar.YAxis Float
yAxis =
    Bar.axisLeft
        [ Axis.tickCount 5
        , Axis.tickFormat valueFormatter
        ]


verticalGrouped : Int -> Html msg
verticalGrouped width =
    Bar.init
        { margin = { top = 5, right = 10, bottom = 20, left = 40 }
        , width = toWidth width
        , height = width |> toWidth |> toHeight
        }
        |> Bar.withColorPalette colorScheme
        |> Bar.withColumnTitle (Bar.yColumnTitle valueFormatter)
        |> Bar.withGroupedLayout
        |> Bar.withYAxis yAxis
        |> Bar.render ( data, accessor )


desc : Html msg
desc =
    Html.div [ Attributes.class "example__desc" ]
        [ Html.h3 [] [ Html.text "Grouped vertical bar chart" ]
        , Html.a [ Attributes.href "https://github.com/data-viz-lab/homepage/blob/main/src/Bar.elm" ]
            [ Html.text "source code" ]
        ]


dataPrev : Html msg
dataPrev =
    Html.div [ Attributes.class "example__data-prev" ] []


codePrev : Html msg
codePrev =
    Html.div [ Attributes.class "example__code-prev" ] []


view : { a | width : Int } -> List (Html msg)
view { width } =
    [ desc
    , verticalGrouped width
    , dataPrev
    , codePrev
    ]
