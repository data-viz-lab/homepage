module CodePrev exposing
    ( codePrev
    , codePrevBar
    , codePrevLine
    )

import Html exposing (Html)
import Html.Attributes as Attributes


codePrev : String -> Html msg
codePrev content =
    Html.div [ Attributes.class "example__code-prev" ]
        [ Html.code [ Attributes.class "terminal" ]
            [ Html.pre []
                [ Html.text content ]
            ]
        ]


codePrevLine : String
codePrevLine =
    """ 
type alias CityTimeline =
    { name : String
    , population : Float
    , year : Float
    }

accessor : Line.Accessor Data.ContinuousData
accessor =
    Line.cont
        { xGroup = .name >> Just
        , xValue = .year
        , yValue = .population
        }

verticalGrouped : Int -> Html msg
verticalGrouped width =
    Line.init
        { margin = margin
        , width = width
        , height = height
        }
        |> Line.withColorPalette colorScheme
        |> Line.withLabels Line.xGroupLabel
        |> Line.withSymbols [ circle ]
        |> Line.withLineStyle [ ( "stroke-width", "2" ) ]
        |> Line.withYAxis yAxis
        |> Line.withXAxisCont xAxis
        |> Line.render ( Data.citiesTimeline, accessor )
        """


codePrevBar : String
codePrevBar =
    """ 
type alias GroupData =
    { x : String
    , y : Float
    , groupLabel : String
    }

accessor : Bar.Accessor Data.GroupData
accessor =
    Bar.Accessor (.groupLabel >> Just) .x .y

verticalGrouped : Int -> Html msg
verticalGrouped width =
    Bar.init
        { margin = margin
        , width = width
        , height = height
        }
        |> Bar.withColorPalette colorScheme
        |> Bar.withColumnTitle
            (Bar.yColumnTitle valueFormatter)
        |> Bar.withGroupedLayout
        |> Bar.withYAxis yAxis
        |> Bar.withXAxis xAxis
        |> Bar.render ( Data.groupData, accessor )
        """
