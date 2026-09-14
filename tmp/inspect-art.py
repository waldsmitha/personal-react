from PIL import Image,ImageOps,ImageDraw
from pathlib import Path
files=[p for p in Path('src/assets').iterdir() if p.suffix.lower() in ['.jpg','.png']]
canvas=Image.new('RGB',(1200,600),'#dddddd');d=ImageDraw.Draw(canvas)
for i,p in enumerate(files):
 im=Image.open(p).convert('RGB');im.thumbnail((220,240));x=(i%5)*240;y=(i//5)*300;canvas.paste(im,(x+(240-im.width)//2,y+25));d.text((x+12,y+275),p.name,fill='black')
canvas.save('tmp/artwork-contact.jpg')
