The Longest Trip stills, web-optimised (2000px long edge, q82).

  01-pain.jpg      Gbenga in crisis, head tipped back, hand gripping his shoulder
  02-field.jpg     Wide: two figures sitting in the field under a big sky
  03-grief.jpg     Close portrait of a woman crying in a dim room
  04-friends.jpg   Three friends on a sofa, laughing, playing a video game
  05-comfort.jpg   From behind: a hand resting on a bowed shoulder

02 is both the case-study hero and the work-card poster.

These frames are 2.39:1 scope, not 16:9, so they use .still-scope and
.case-hero-media.is-scope to keep the full composition. The player poster
letterboxes on black via .watch-frame.is-scope because the YouTube embed
itself stays 16:9.

Sources are 'Longest trip 1-5.JPG' in images/Selected/ (4096x1716 each),
in that same order. Regenerate with:
  sips -Z 2000 -s format jpeg -s formatOptions 82 SOURCE.JPG --out 01-pain.jpg
