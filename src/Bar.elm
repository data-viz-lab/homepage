module Bar exposing (verticalGrouped)

import Axis
import Chart.Bar as Bar
import Color exposing (Color, rgb255)
import FormatNumber
import FormatNumber.Locales exposing (Decimals(..), usLocale)
import Html exposing (Html)
import Html.Attributes exposing (class)
import Scale.Color


colorScheme : List Color
colorScheme =
    [ Color.rgb255 38 70 83
    , Color.rgb255 233 196 106
    , Color.rgb255 231 111 81
    ]


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


width : Float
width =
    400


height : Float
height =
    300


valueFormatter : Float -> String
valueFormatter =
    FormatNumber.format { usLocale | decimals = Exact 0 }


yAxis : Bar.YAxis Float
yAxis =
    Bar.axisLeft
        [ Axis.tickCount 5
        , Axis.tickFormat valueFormatter
        ]


verticalGrouped : Html msg
verticalGrouped =
    Bar.init
        { margin = { top = 5, right = 10, bottom = 20, left = 40 }
        , width = width
        , height = height
        }
        |> Bar.withColorPalette colorScheme
        |> Bar.withColumnTitle (Bar.yColumnTitle valueFormatter)
        |> Bar.withGroupedLayout
        |> Bar.withYAxis yAxis
        |> Bar.render ( data, accessor )
