module Line exposing (view)

import Axis
import Chart.Line as Line
import Chart.Symbol as Symbol exposing (Symbol)
import Color exposing (Color, rgb255)
import Data
import Helpers
import Html exposing (Html)
import Html.Attributes as Attributes
import Numeral
import Scale.Color
import Set


colorScheme : List Color
colorScheme =
    Scale.Color.tableau10


circle : Symbol
circle =
    Symbol.circle
        |> Symbol.withStyle [ ( "stroke", "white" ) ]
        |> Symbol.withSize 10


accessor : Line.Accessor Data.ContinuousData
accessor =
    Line.cont
        (Line.AccessorCont
            (.groupLabel >> Just)
            .x
            .y
        )


valueFormatter : Float -> String
valueFormatter =
    Numeral.format "0a"


sharedAttributes : List (Axis.Attribute value)
sharedAttributes =
    [ Axis.tickSizeOuter 0
    , Axis.tickSizeInner 3
    ]


yAxis : Line.YAxis Float
yAxis =
    Line.axisLeft (Axis.tickCount 4 :: sharedAttributes)


xAxisTicks : List Float
xAxisTicks =
    Data.continuousData
        |> List.map .x
        |> Set.fromList
        |> Set.toList
        |> List.sort


xAxis : Line.XAxis Float
xAxis =
    Line.axisBottom
        ([ Axis.ticks xAxisTicks
         , Axis.tickFormat (round >> String.fromInt)
         ]
            ++ sharedAttributes
        )


verticalGrouped : Int -> Html msg
verticalGrouped width =
    Line.init
        { margin = Helpers.margin
        , width = Helpers.toChartWidth width
        , height =
            width
                |> Helpers.toChartWidth
                |> Helpers.toChartHeight
        }
        |> Line.withColorPalette colorScheme
        |> Line.withSymbols [ circle ]
        |> Line.withLineStyle [ ( "stroke-width", "2" ) ]
        |> Line.withGroupedLayout
        |> Line.withYAxis yAxis
        |> Line.withXAxisCont xAxis
        |> Line.render ( Data.continuousData, accessor )


desc : Html msg
desc =
    Html.div [ Attributes.class "example__desc" ]
        [ Html.h3 [] [ Html.text "Continuous line chart with dots" ]
        , Html.a [ Attributes.href "https://github.com/data-viz-lab/homepage/blob/main/src/Line.elm" ]
            [ Html.text "source code" ]
        ]


codePrev : Html msg
codePrev =
    Helpers.codePrev
        """ 
type alias ContinuousData =
    { x : Float
    , y : Float
    , groupLabel : String
    }

accessor : Line.Accessor Data.ContinuousData
accessor =
    Line.cont
        (Line.AccessorCont
            (.groupLabel >> Just)
            .x
            .y
        )

verticalGrouped : Int -> Html msg
verticalGrouped width =
    Line.init
        { margin = Helpers.margin
        , width = Helpers.toChartWidth width
        , height =
            width
                |> Helpers.toChartWidth
                |> Helpers.toChartHeight
        }
        |> Line.withColorPalette colorScheme
        |> Line.withSymbols [ circle ]
        |> Line.withLineStyle [ ( "stroke-width", "2" ) ]
        |> Line.withGroupedLayout
        |> Line.withYAxis yAxis
        |> Line.withXAxisCont xAxis
        |> Line.render ( Data.continuousData, accessor )
        """


view : { a | width : Int } -> List (Html msg)
view { width } =
    [ desc
    , verticalGrouped width
    , codePrev
    ]
