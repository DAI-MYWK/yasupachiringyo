# Supporting image generation record

Date: 2026-09-25

All three images are original AI-generated conceptual photographs created with the built-in `image_gen__imagegen` tool. No image assets or reference images from the reference website were used. These images illustrate services and atmosphere; they are not photographs of real customer properties, employees, or completed work.

The selected PNG originals are retained outside the public web directory under `docs/design-assets/originals/`, so production builds do not ship these large source files. The site-ready JPEG files were exported at quality 83 with macOS `sips`, preserving the original framing and dimensions. No creative retouching, compositing, or recoloring was performed after generation. Generated outputs were visually inspected for natural composition, appropriate subject matter, consistent warm greens, and absence of text or logos.

## Production WebP exports

WebP derivatives use the installed `sharp` image library, without creative edits, recoloring, or changed crops. Supporting images were resized directly from their PNG originals to 1000 px wide with quality 80 and effort 6. The separately generated hero JPEG was exported at 1600 px wide with quality 82 and effort 6. JPEG fallback files remain in place.

| WebP asset | Dimensions | Bytes |
| --- | --- | ---: |
| `public/assets/redesign/hero-residential.webp` | 1600 × 900 | 424,344 |
| `public/assets/redesign/forest-canopy.webp` | 1000 × 1250 | 336,564 |
| `public/assets/redesign/timber-detail.webp` | 1000 × 750 | 174,988 |
| `public/assets/redesign/garden-care.webp` | 1000 × 667 | 227,344 |

The four main WebP images total 1,163,240 bytes (about 1.11 MiB). This preserves foliage detail at the requested quality levels.

## forest-canopy

- Website asset: `public/assets/redesign/forest-canopy.jpg`
- Dimensions: 1122 × 1402 px; JPEG size: 876,743 bytes.
- Original: `docs/design-assets/originals/forest-canopy.png`
- Built-in output provenance: `/Users/miyawakidai/.codex/generated_images/01a0d7db-4545-7672-908a-e2bd83cd6e3e/exec-d8f3a607-58bc-4970-b98d-3d5125d55256.png`

Exact generation prompt:

```text
Use case: photorealistic-natural
Asset type: original supporting photograph for a quiet, refined Japanese residential tree-care website.
Primary request: a beautiful Japanese cedar forest photographed from ground level, looking slightly upward along tall straight trunks into luminous foliage. Completely original imaginary location in the Tohoku region of Japan.
Composition/framing: portrait 4:5 photograph; gently wide 28mm lens; tall cedar trunks in an irregular natural rhythm, layered depth, nearest trunk off center, attractive green forest floor visible at bottom. Full-bleed photographic image only.
Lighting/mood: soft late-spring morning sun filtering through the canopy, warm luminous highlights and calm shade; peaceful, grounded, restrained editorial documentary quality.
Color palette: rich but muted natural greens, warm honey light, dark cedar bark; subtly filmic with natural color and believable exposure, no excessive saturation.
Materials/textures: highly believable bark texture, fine needles, fresh ferns and natural leaf litter, subtle atmospheric depth.
Constraints: no people, no buildings, no text, no logos, no watermark, no artificial graphical frame, no collage. It must read as a sophisticated real woodland photograph rather than fantasy or illustration.
```

## timber-detail

- Website asset: `public/assets/redesign/timber-detail.jpg`
- Dimensions: 1448 × 1086 px; JPEG size: 696,742 bytes.
- Original: `docs/design-assets/originals/timber-detail.png`
- Built-in output provenance: `/Users/miyawakidai/.codex/generated_images/01a0d7db-4545-7672-908a-e2bd83cd6e3e/exec-543b40ba-5b85-4c6b-bb88-4b932370677a.png`

Exact generation prompt:

```text
Use case: photorealistic-natural
Asset type: original supporting photograph for a quiet, refined Japanese residential tree-care website.
Primary request: beautiful close-up of neatly stacked recently cut small and medium Japanese hardwood logs beside a rural woodland garden; the round cut ends and intricate annual growth rings are the subject.
Composition/framing: landscape 4:3 photograph, close ground-level viewpoint; asymmetrical natural stack of about a dozen logs, ends facing toward camera, one larger cut end subtly off center; only the cut faces in foreground are tack sharp, forest greenery softly out of focus behind. No background house needed. Full-bleed photograph only.
Lighting/mood: dappled warm late-spring morning light, calm, tactile and carefully tended; sophisticated natural documentary photograph, restrained warm filmic rendering, believable shadows and exposure.
Color palette: pale honey fresh timber, dark rough brown-grey bark, deep muted green woodland bokeh.
Materials/textures: realistic saw marks, subtle natural cracks, non-repeating annual rings, moist fresh cut wood, uneven authentic bark, a few tiny bits of sawdust.
Constraints: no people, no equipment, no text, no logos, no watermark, no frame, no collage, no staged studio look, no excessive saturation; an original imaginary setting in rural northeastern Japan.
```

## garden-care

- Website asset: `public/assets/redesign/garden-care.jpg`
- Dimensions: 1536 × 1024 px; JPEG size: 958,344 bytes.
- Original: `docs/design-assets/originals/garden-care.png`
- Built-in output provenance: `/Users/miyawakidai/.codex/generated_images/01a0d7db-4545-7672-908a-e2bd83cd6e3e/exec-dfab284a-ba8d-4b8a-beab-00ecffb27a8d.png`

Exact generation prompt:

```text
Use case: photorealistic-natural
Asset type: original supporting photograph for a quiet, refined Japanese residential tree-care website.
Primary request: a large mature Japanese deciduous tree at the edge of a modest rural residential garden with a few small fruit trees, in a quiet village in northeastern Japan. The tree's relationship to the garden and nearby home should be clear and reassuring.
Scene/backdrop: lived-in but tidy garden in late spring, simple grass with naturally irregular edges, a narrow stone or earth garden path, several modest fruit trees at varied distances, a small portion of a grey Japanese tile-roofed house in the far middle distance, gentle green hills behind.
Composition/framing: horizontal 3:2 photograph; human eye-level camera; mature tree trunk and spreading leafy branches in left third and above, garden opening toward the right and middle; documentary 35mm environmental framing, natural depth and realistic scale. Full-bleed photograph only.
Lighting/mood: soft warm late-spring morning sunlight, peaceful and cared for, clear gentle air; sophisticated editorial documentary quality.
Color palette: rich muted fresh greens, natural warm wood, subtle warm highlights, stone greys; restrained warm filmic color, believable exposure.
Constraints: no people, no workers, no heavy machinery, no cherry blossoms, no elaborate formal Japanese landscape garden, no luxury mansion, no text, no logos, no watermark, no frame, no collage, no excessive saturation. Entirely new imaginary scene, not a photograph of any real customer property.
```
