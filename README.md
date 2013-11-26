This test shows that the helpers, when a list gets re-rendered (by sorting) the helper gets called but wont re-render.

**Note** when switching back the type, its will regain its reactivity again.


Steps to reproduce:
===================

    1. Press the "switch sorting" button (reactivity gets lost)
    2. Press the switch type and reactiveity is back (when pressed again even for the items which lost reactivity)
