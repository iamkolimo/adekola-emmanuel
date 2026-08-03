Ajeside film stills — web-optimised JPEGs (2000px long edge, quality 80).

  01-family.jpg          Title card: four generations seated together
  02-matriarch.jpg       Profile of the elderly woman in greenery
  03-drummer.jpg         Low-angle drummer against the sky
  04-procession.jpg      Procession of carriers, drummers and flute players
  05-elder-portrait.jpg  Close profile of the elder in the dark cap
  06-weaving-hands.jpg   The master weaver's hands at the thread
  07-compound.jpg        The weaver seated in his compound, cloth on the line
  08-indigo-cloth.jpg    The weaver holding open the finished indigo cloth

01 is the poster: it carries the burned-in title, so it is used for the work
card on the home page and as the Open Graph image, not as the case-study hero
(which would put the title on screen twice). 04 is the hero.

Regenerated from the full-resolution frames in images/Selected/, which stays
out of git — those PNGs are ~106 MB and are source, not web assets:

  sips -Z 2000 -s format jpeg -s formatOptions 80 SOURCE.png --out 01-family.jpg

Every <img> on the case-study page carries data-fallback, so a missing file
renders as a labelled placeholder rather than a broken image.
