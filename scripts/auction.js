[.result["epos-slot-candidates"][] |
{"s": .["stake-per-key"], "v": .validator, "k": .["keys-at-auction"][]}] |
sort_by(.s) | reverse |
to_entries | map([(.key + 1), .value.v, (.value.s/1e+18)]) | .[]