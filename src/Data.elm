module Data exposing
    ( ContinuousData
    , GroupData
    , continuousData
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


type alias ContinuousData =
    { x : Float
    , y : Float
    , groupLabel : String
    }


continuousData : List ContinuousData
continuousData =
    [ { groupLabel = "A"
      , x = 1991
      , y = 10
      }
    , { groupLabel = "A"
      , x = 1992
      , y = 16
      }
    , { groupLabel = "A"
      , x = 1993
      , y = 26
      }
    , { groupLabel = "B"
      , x = 1991
      , y = 13
      }
    , { groupLabel = "B"
      , x = 1992
      , y = 23
      }
    , { groupLabel = "B"
      , x = 1993
      , y = 16
      }
    ]
