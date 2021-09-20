module Data exposing
    ( CityTimeline
    , GroupData
    , citiesTimeline
    , groupData
    )


type alias GroupData =
    { x : String
    , y : Float
    , groupLabel : String
    }


groupData : List GroupData
groupData =
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


type alias CityTimeline =
    { name : String
    , population : Float
    , year : Float
    }


citiesTimeline : List CityTimeline
citiesTimeline =
    [ { name = "London"
      , population = 8
      , year = 1950
      }
    , { name = "London"
      , population = 8
      , year = 1955
      }
    , { name = "London"
      , population = 8
      , year = 1960
      }
    , { name = "London"
      , population = 8
      , year = 1965
      }
    , { name = "London"
      , population = 8
      , year = 1970
      }
    , { name = "London"
      , population = 7
      , year = 1975
      }
    , { name = "London"
      , population = 7
      , year = 1980
      }
    , { name = "London"
      , population = 7
      , year = 1985
      }
    , { name = "London"
      , population = 7
      , year = 1990
      }
    , { name = "London"
      , population = 7
      , year = 1995
      }
    , { name = "London"
      , population = 7
      , year = 2000
      }
    , { name = "São Paolo"
      , population = 2
      , year = 1950
      }
    , { name = "São Paolo"
      , population = 3
      , year = 1955
      }
    , { name = "São Paolo"
      , population = 4
      , year = 1960
      }
    , { name = "São Paolo"
      , population = 5
      , year = 1965
      }
    , { name = "São Paolo"
      , population = 8
      , year = 1970
      }
    , { name = "São Paolo"
      , population = 9
      , year = 1975
      }
    , { name = "São Paolo"
      , population = 12
      , year = 1980
      }
    , { name = "São Paolo"
      , population = 13
      , year = 1985
      }
    , { name = "São Paolo"
      , population = 15
      , year = 1990
      }
    , { name = "São Paolo"
      , population = 16
      , year = 1995
      }
    , { name = "São Paolo"
      , population = 17
      , year = 2000
      }
    ]
