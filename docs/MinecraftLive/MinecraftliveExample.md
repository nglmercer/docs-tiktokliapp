---
sidebar_position: 2
---
# Ejemplos de MC Live
Crea un bot para interactuar en un servidor
## Requerimientos anteriores
Puede configurar el bot para definir su:
- nombre del bot
- Ip del server : puerto
- Su nombre del jugador minecraft
- comando inicial
![minecraftliveimg](minecraftlive.png)
- Eventos como:
1. chat 
2. gift 
3. follow 
4. share
## EJEMPLO PARA Minecraft TNT 
![img minecraftlive](imgminecraftTIKTOK.png)
Los nuevos ejemplos estan en creación.....  
## Ejemplo actualizado de tnt
```
chat:
/tellraw @a {"text":"uniqueId : comment ", "color":"green"}
/execute at playername run function wasd.tnt:explode/inverted
likes:
default:
/title @a title {"text":" 50 likes "}
/title @a subtitle {"text":" uniqueId envio {likes} likes ","bold":true,"color":"gold"}
/execute at playername run function wasd.tnt:explode/underwatergift:
default:
/tellraw @a {"text":"uniqueId  sent a giftName xrepeatCount ", "color":"gold"}
/title @a subtitle {"text":"ENVIO giftName xrepeatCount ","bold":true,"color":"gold"}
Taco:
/execute at playername run fill ~-1 ~ ~-1 ~ ~1 ~ minecraft:tnt hollow
/execute at playername run give @p diamond_leggings{Enchantments:[{id:"minecraft:protection",lvl:10}]} 1
/execute at playername run summon minecraft:creeper ~ ~ ~ {CustomName:'{"text":"uniqueId "}', CustomNameVisible:1}
/execute at playername run playsound minecraft:entity.player.levelup ambient @p
TikTok:
/tellraw @a {"text":"uniqueId  sent a giftName xrepeatCount ", "color":"gold"}
/title @a subtitle {"text":"ENVIO giftName xrepeatCount ","bold":true,"color":"gold"}
/execute at playername run summon minecraft:skeleton ~ ~ ~ {CustomName:'{"text":"uniqueId "}', CustomNameVisible:1}
/title @a title {"text":"uniqueId "}
Rose:
/tellraw @a {"text":"uniqueId  sent a giftName xrepeatCount ", "color":"gold"}
/title @a subtitle {"text":"ENVIO giftName xrepeatCount ","bold":true,"color":"gold"}
/execute at playername run function wasd.tnt:explode/underwater
Finger Heart:
/tellraw @a {"text":"uniqueId  sent a giftName xrepeatCount ", "color":"gold"}
/title @a subtitle {"text":"ENVIO giftName xrepeatCount ","bold":true,"color":"gold"}
/execute at playername run function wasd.tnt:explode/__generated__/block/349
Rosa:
/tellraw @a {"text":"uniqueId  sent a giftName xrepeatCount ", "color":"gold"}
/title @a subtitle {"text":"ENVIO giftName xrepeatCount ","bold":true,"color":"gold"}
/execute at playername run function wasd.tnt:explode/tntnt
Heart Me:
/tellraw @a {"text":"uniqueId  sent a giftName xrepeatCount ", "color":"gold"}
/title @a subtitle {"text":"ENVIO giftName xrepeatCount ","bold":true,"color":"gold"}
/execute at playername run function wasd.tnt:explode/fire
Doughnut:
/tellraw @a {"text":"uniqueId  sent a giftName xrepeatCount ", "color":"gold"}
/title @a subtitle {"text":"ENVIO giftName xrepeatCount ","bold":true,"color":"gold"}
/execute at playername run function wasd.tnt:explode/tntntnt
/execute at playername run function wasd.tnt:explode/meteor
Hands Heart:
/tellraw @a {"text":"uniqueId  sent a giftName xrepeatCount ", "color":"gold"}
/title @a subtitle {"text":"ENVIO giftName xrepeatCount ","bold":true,"color":"gold"}
/execute at playername run function wasd.tnt:explode/rocket
/execute at playername run function wasd.tnt:explode/anvil
/execute at playername run function wasd.tnt:explode/amethyst
Mishka Bear:
/tellraw @a {"text":"uniqueId  sent a giftName xrepeatCount ", "color":"gold"}
/title @a subtitle {"text":"ENVIO giftName xrepeatCount ","bold":true,"color":"gold"}
/execute at playername run function wasd.tnt:explode/tntntnt
/execute at playername run function wasd.tnt:explode/tntntnt
/execute at playername run function wasd.tnt:explode/meteor
/execute at playername run function wasd.tnt:explode/meteor
Swan:
/tellraw @a {"text":"uniqueId  sent a giftName xrepeatCount ", "color":"gold"}
/title @a subtitle {"text":"ENVIO giftName xrepeatCount ","bold":true,"color":"gold"}
/execute at playername run function wasd.tnt:explode/cow
/execute at playername run function wasd.tnt:explode/tntntnt
/execute at playername run function wasd.tnt:explode/meteor
/execute at playername run function wasd.tnt:explode/meteor
/execute at playername run function wasd.tnt:explode/tntntnt
/execute at playername run function wasd.tnt:explode/tntntnt
/execute at playername run function wasd.tnt:explode/meteor
/execute at playername run function wasd.tnt:explode/meteor
Corgi:
/tellraw @a {"text":"uniqueId  sent a giftName xrepeatCount ", "color":"gold"}
/title @a subtitle {"text":"ENVIO giftName xrepeatCount ","bold":true,"color":"gold"}
/execute at playername run function wasd.tnt:explode/cow
/execute at playername run function wasd.tnt:explode/tntntnt
/execute at playername run function wasd.tnt:explode/meteor
/execute at playername run function wasd.tnt:explode/meteor
/execute at playername run function wasd.tnt:explode/tntntnt
/execute at playername run function wasd.tnt:explode/tntntnt
/execute at playername run function wasd.tnt:explode/withering
/execute at playername run function wasd.tnt:explode/meteor
Money Gun:
/tellraw @a {"text":"uniqueId  sent a giftName xrepeatCount ", "color":"gold"}
/title @a subtitle {"text":"ENVIO giftName xrepeatCount ","bold":true,"color":"gold"}
/execute at playername run function wasd.tnt:explode/tntntnt
/execute at playername run function wasd.tnt:explode/tntntnt
/execute at playername run function wasd.tnt:explode/meteor
/execute at playername run function wasd.tnt:explode/meteor
/execute at playername run function wasd.tnt:explode/tntntnt
/execute at playername run function wasd.tnt:explode/tntntnt
/execute at playername run function wasd.tnt:explode/meteor
/execute at playername run function wasd.tnt:explode/meteor
/gamemode survival playername
Leon the Kitten:
/tellraw @a {"text":"uniqueId  sent a giftName xrepeatCount ", "color":"gold"}
/title @a subtitle {"text":"ENVIO giftName xrepeatCount ","bold":true,"color":"gold"}
/execute at playername run function wasd.tnt:explode/tntntnt
/execute at playername run function wasd.tnt:explode/tntntnt
/execute at playername run function wasd.tnt:explode/meteor
/execute at playername run function wasd.tnt:explode/meteor
/execute at playername run function wasd.tnt:explode/tntntnt
/execute at playername run function wasd.tnt:explode/tntntnt
/execute at playername run function wasd.tnt:explode/meteor
/execute at playername run function wasd.tnt:explode/meteor
/gamemode survival playername
Whale diving:
/tellraw @a {"text":"uniqueId  sent a giftName xrepeatCount ", "color":"gold"}
/title @a subtitle {"text":"ENVIO giftName xrepeatCount ","bold":true,"color":"gold"}
/execute at playername run function wasd.tnt:explode/tntntnt
/execute at playername run function wasd.tnt:explode/tntntnt
/execute at playername run function wasd.tnt:explode/meteor
/execute at playername run function wasd.tnt:explode/meteor
/execute at playername run function wasd.tnt:explode/tntntnt
/execute at playername run function wasd.tnt:explode/tntntnt
/execute at playername run function wasd.tnt:explode/meteor
/execute at playername run function wasd.tnt:explode/meteor
/gamemode survival playernameenvelope:
/tellraw @a {"text":"uniqueId  comment cofreeeee ", "color":"gold"}
/say uniqueId  comment cofreeeee
/execute at playername run playsound minecraft:entity.player.levelup ambient @p
subscribe:
/tellraw @a {"text":"uniqueId  subscribe ", "color":"gold"}
/say uniqueId  subscribe subscribe
/execute at playername run playsound minecraft:entity.player.levelup ambient @p
follow:
/tellraw @a {"text":"uniqueId  te sige ", "color":"gold"}
/execute at playername run summon minecraft:villager ~ ~ ~ {CustomName:'{"text":"uniqueId "}', CustomNameVisible:1}
/title @a title {"text":"uniqueId "}
/title @a subtitle {"text":"te sige ","bold":true,"color":"gold"}
welcome:
/say join uniqueId
/execute at playername run give @a minecraft:golden_apple 1
share:
/tellraw @a {"text":"uniqueId  compartio ", "color":"gold"}
/title @a title {"text":"uniqueId "}
/title @a subtitle {"text":"compartio ","bold":true,"color":"gold"}
```
## Ejemplo Yaml de la version anterior
```
chat:
  - "/tellraw @a {\"text\":\"uniqueId : comment \", \"color\":\"green\"}"
  - "/execute at playername run function wasd.tnt:explode/inverted"
likes:
  default:
    - "/title @a title {\"text\":\" 50 likes \"}"
    - "/title @a subtitle {\"text\":\" uniqueId envio {likes} likes \",\"bold\":true,\"color\":\"gold\"}"
    - "/execute at playername run function wasd.tnt:explode/underwater"
gift:
  default:
    - "/tellraw @a {\"text\":\"uniqueId  sent a giftName xrepeatCount \", \"color\":\"gold\"}"
    - "/title @a subtitle {\"text\":\"ENVIO giftName xrepeatCount \",\"bold\":true,\"color\":\"gold\"}"
  Taco :
    - "/execute at playername run fill ~-1 ~ ~-1 ~ ~1 ~ minecraft:tnt hollow"
    - "/execute at playername run give @p diamond_leggings{Enchantments:[{id:\"minecraft:protection\",lvl:10}]} 1"
    - "/execute at playername run summon minecraft:creeper ~ ~ ~ {CustomName:'{\"text\":\"uniqueId \"}', CustomNameVisible:1}"
    - "/execute at playername run playsound minecraft:entity.player.levelup ambient @p"       
  TikTok:
    - "/tellraw @a {\"text\":\"uniqueId  sent a giftName xrepeatCount \", \"color\":\"gold\"}"
    - "/title @a subtitle {\"text\":\"ENVIO giftName xrepeatCount \",\"bold\":true,\"color\":\"gold\"}"
    - "/execute at playername run summon minecraft:skeleton ~ ~ ~ {CustomName:'{\"text\":\"uniqueId \"}', CustomNameVisible:1}"
    - "/title @a title {\"text\":\"uniqueId \"}"
  Rose:
    - "/tellraw @a {\"text\":\"uniqueId  sent a giftName xrepeatCount \", \"color\":\"gold\"}"
    - "/title @a subtitle {\"text\":\"ENVIO giftName xrepeatCount \",\"bold\":true,\"color\":\"gold\"}"
    - "/execute at playername run function wasd.tnt:explode/underwater"
  Finger Heart:
    - "/tellraw @a {\"text\":\"uniqueId  sent a giftName xrepeatCount \", \"color\":\"gold\"}"
    - "/title @a subtitle {\"text\":\"ENVIO giftName xrepeatCount \",\"bold\":true,\"color\":\"gold\"}"
    - "/execute at playername run function wasd.tnt:explode/__generated__/block/349"
  Rosa:
    - "/tellraw @a {\"text\":\"uniqueId  sent a giftName xrepeatCount \", \"color\":\"gold\"}"
    - "/title @a subtitle {\"text\":\"ENVIO giftName xrepeatCount \",\"bold\":true,\"color\":\"gold\"}"
    - "/execute at playername run function wasd.tnt:explode/tntnt"
  Heart Me:
    - "/tellraw @a {\"text\":\"uniqueId  sent a giftName xrepeatCount \", \"color\":\"gold\"}"
    - "/title @a subtitle {\"text\":\"ENVIO giftName xrepeatCount \",\"bold\":true,\"color\":\"gold\"}"
    - "/execute at playername run function wasd.tnt:explode/fire"
  Doughnut:
    - "/tellraw @a {\"text\":\"uniqueId  sent a giftName xrepeatCount \", \"color\":\"gold\"}"
    - "/title @a subtitle {\"text\":\"ENVIO giftName xrepeatCount \",\"bold\":true,\"color\":\"gold\"}"
    - "/execute at playername run function wasd.tnt:explode/tntntnt"
    - "/execute at playername run function wasd.tnt:explode/meteor"
  Hands Heart:
    - "/tellraw @a {\"text\":\"uniqueId  sent a giftName xrepeatCount \", \"color\":\"gold\"}"
    - "/title @a subtitle {\"text\":\"ENVIO giftName xrepeatCount \",\"bold\":true,\"color\":\"gold\"}"
    - "/execute at playername run function wasd.tnt:explode/rocket"
    - "/execute at playername run function wasd.tnt:explode/anvil"
    - "/execute at playername run function wasd.tnt:explode/amethyst"
  Mishka Bear:
    - "/tellraw @a {\"text\":\"uniqueId  sent a giftName xrepeatCount \", \"color\":\"gold\"}"
    - "/title @a subtitle {\"text\":\"ENVIO giftName xrepeatCount \",\"bold\":true,\"color\":\"gold\"}"
    - "/execute at playername run function wasd.tnt:explode/tntntnt"
    - "/execute at playername run function wasd.tnt:explode/tntntnt"
    - "/execute at playername run function wasd.tnt:explode/meteor"
    - "/execute at playername run function wasd.tnt:explode/meteor"
  Swan:
    - "/tellraw @a {\"text\":\"uniqueId  sent a giftName xrepeatCount \", \"color\":\"gold\"}"
    - "/title @a subtitle {\"text\":\"ENVIO giftName xrepeatCount \",\"bold\":true,\"color\":\"gold\"}"
    - "/execute at playername run function wasd.tnt:explode/cow"
    - "/execute at playername run function wasd.tnt:explode/tntntnt"
    - "/execute at playername run function wasd.tnt:explode/meteor"
    - "/execute at playername run function wasd.tnt:explode/meteor"
    - "/execute at playername run function wasd.tnt:explode/tntntnt"
    - "/execute at playername run function wasd.tnt:explode/tntntnt"
    - "/execute at playername run function wasd.tnt:explode/meteor"
    - "/execute at playername run function wasd.tnt:explode/meteor"
  Corgi:
    - "/tellraw @a {\"text\":\"uniqueId  sent a giftName xrepeatCount \", \"color\":\"gold\"}"
    - "/title @a subtitle {\"text\":\"ENVIO giftName xrepeatCount \",\"bold\":true,\"color\":\"gold\"}"
    - "/execute at playername run function wasd.tnt:explode/cow"
    - "/execute at playername run function wasd.tnt:explode/tntntnt"
    - "/execute at playername run function wasd.tnt:explode/meteor"
    - "/execute at playername run function wasd.tnt:explode/meteor"
    - "/execute at playername run function wasd.tnt:explode/tntntnt"
    - "/execute at playername run function wasd.tnt:explode/tntntnt"
    - "/execute at playername run function wasd.tnt:explode/withering"
    - "/execute at playername run function wasd.tnt:explode/meteor"
  Money Gun:
    - "/tellraw @a {\"text\":\"uniqueId  sent a giftName xrepeatCount \", \"color\":\"gold\"}"
    - "/title @a subtitle {\"text\":\"ENVIO giftName xrepeatCount \",\"bold\":true,\"color\":\"gold\"}"
    - "/execute at playername run function wasd.tnt:explode/tntntnt"
    - "/execute at playername run function wasd.tnt:explode/tntntnt"
    - "/execute at playername run function wasd.tnt:explode/meteor"
    - "/execute at playername run function wasd.tnt:explode/meteor"
    - "/execute at playername run function wasd.tnt:explode/tntntnt"
    - "/execute at playername run function wasd.tnt:explode/tntntnt"
    - "/execute at playername run function wasd.tnt:explode/meteor"
    - "/execute at playername run function wasd.tnt:explode/meteor"
    - "/gamemode survival playername"
  Leon the Kitten:
    - "/tellraw @a {\"text\":\"uniqueId  sent a giftName xrepeatCount \", \"color\":\"gold\"}"
    - "/title @a subtitle {\"text\":\"ENVIO giftName xrepeatCount \",\"bold\":true,\"color\":\"gold\"}"
    - "/execute at playername run function wasd.tnt:explode/tntntnt"
    - "/execute at playername run function wasd.tnt:explode/tntntnt"
    - "/execute at playername run function wasd.tnt:explode/meteor"
    - "/execute at playername run function wasd.tnt:explode/meteor"
    - "/execute at playername run function wasd.tnt:explode/tntntnt"
    - "/execute at playername run function wasd.tnt:explode/tntntnt"
    - "/execute at playername run function wasd.tnt:explode/meteor"
    - "/execute at playername run function wasd.tnt:explode/meteor"
    - "/gamemode survival playername"
  Whale diving:
    - "/tellraw @a {\"text\":\"uniqueId  sent a giftName xrepeatCount \", \"color\":\"gold\"}"
    - "/title @a subtitle {\"text\":\"ENVIO giftName xrepeatCount \",\"bold\":true,\"color\":\"gold\"}"
    - "/execute at playername run function wasd.tnt:explode/tntntnt"
    - "/execute at playername run function wasd.tnt:explode/tntntnt"
    - "/execute at playername run function wasd.tnt:explode/meteor"
    - "/execute at playername run function wasd.tnt:explode/meteor"
    - "/execute at playername run function wasd.tnt:explode/tntntnt"
    - "/execute at playername run function wasd.tnt:explode/tntntnt"
    - "/execute at playername run function wasd.tnt:explode/meteor"
    - "/execute at playername run function wasd.tnt:explode/meteor"
    - "/gamemode survival playername"
envelope:
  - "/tellraw @a {\"text\":\"uniqueId  comment cofreeeee \", \"color\":\"gold\"}"
  - "/say uniqueId  comment cofreeeee"
  - "/execute at playername run playsound minecraft:entity.player.levelup ambient @p"
subscribe:
  - "/tellraw @a {\"text\":\"uniqueId  subscribe \", \"color\":\"gold\"}"
  - "/say uniqueId  subscribe subscribe"
  - "/execute at playername run playsound minecraft:entity.player.levelup ambient @p"
follow:
  - "/tellraw @a {\"text\":\"uniqueId  te sige \", \"color\":\"gold\"}"
  - "/execute at playername run summon minecraft:villager ~ ~ ~ {CustomName:'{\"text\":\"uniqueId \"}', CustomNameVisible:1}"
  - "/title @a title {\"text\":\"uniqueId \"}"
  - "/title @a subtitle {\"text\":\"te sige \",\"bold\":true,\"color\":\"gold\"}"
welcome:
  - "/say join uniqueId"
  - "/execute at playername run give @a minecraft:golden_apple 1"
share:
  - "/tellraw @a {\"text\":\"uniqueId  compartio \", \"color\":\"gold\"}"
  - "/title @a title {\"text\":\"uniqueId \"}"
  - "/title @a subtitle {\"text\":\"compartio \",\"bold\":true,\"color\":\"gold\"}"
```

### Un ejemplo de mobs

este es un ejemplo mas simple para minecraft vanilla sin mods
```
chat:
  - "/tellraw @a {\"text\":\"uniqueId : comment \", \"color\":\"green\"}"
  - "/execute at playername run summon minecraft:sheep ~ ~ ~ {CustomName:'{\"text\":\"uniqueId \"}', CustomNameVisible:1}"
likes:
  default:
    - "/execute at playername run summon minecraft:zombie ~ ~ ~"
    - "/title @a title {\"text\":\" 50 likes \"}"
    - "/title @a subtitle {\"text\":\" uniqueId envio {likes} likes \",\"bold\":true,\"color\":\"gold\"}"
    - "/execute at playername run give @a minecraft:golden_apple 1"
gift:
  default:
    - "/tellraw @a {\"text\":\"uniqueId  sent a giftName xrepeatCount \", \"color\":\"gold\"}"
    - "/title @a subtitle {\"text\":\"ENVIO giftName xrepeatCount \",\"bold\":true,\"color\":\"gold\"}"
  Taco :
    - "/execute at playername run fill ~-1 ~ ~-1 ~ ~1 ~ minecraft:tnt hollow"
    - "/execute at playername run give @p diamond_leggings{Enchantments:[{id:\"minecraft:protection\",lvl:10}]} 1"
    - "/execute at playername run summon minecraft:creeper ~ ~ ~ {CustomName:'{\"text\":\"uniqueId \"}', CustomNameVisible:1}"
    - "/execute at playername run playsound minecraft:entity.player.levelup ambient @p"       
  TikTok:
    - "/tellraw @a {\"text\":\"uniqueId  sent a giftName xrepeatCount \", \"color\":\"gold\"}"
    - "/title @a subtitle {\"text\":\"ENVIO giftName xrepeatCount \",\"bold\":true,\"color\":\"gold\"}"
    - "/execute at playername run summon minecraft:skeleton ~ ~ ~ {CustomName:'{\"text\":\"uniqueId \"}', CustomNameVisible:1}"
    - "/title @a title {\"text\":\"uniqueId \"}"
  Rose:
    - "/tellraw @a {\"text\":\"uniqueId  sent a giftName xrepeatCount \", \"color\":\"gold\"}"
    - "/title @a subtitle {\"text\":\"ENVIO giftName xrepeatCount \",\"bold\":true,\"color\":\"gold\"}"
    - "/execute at playername run give @a minecraft:golden_apple 1"
envelope:
  - "/tellraw @a {\"text\":\"uniqueId  comment cofreeeee \", \"color\":\"gold\"}"
  - "/say uniqueId  comment cofreeeee"
  - "/execute at playername run playsound minecraft:entity.player.levelup ambient @p"
subscribe:
  - "/tellraw @a {\"text\":\"uniqueId  subscribe \", \"color\":\"gold\"}"
  - "/say uniqueId  subscribe subscribe"
  - "/execute at playername run playsound minecraft:entity.player.levelup ambient @p"
follow:
  - "/tellraw @a {\"text\":\"uniqueId  te sige \", \"color\":\"gold\"}"
  - "/execute at playername run summon minecraft:villager ~ ~ ~ {CustomName:'{\"text\":\"uniqueId \"}', CustomNameVisible:1}"
  - "/title @a title {\"text\":\"uniqueId \"}"
  - "/title @a subtitle {\"text\":\"te sige \",\"bold\":true,\"color\":\"gold\"}"
welcome:
  - "/say join uniqueId"
  - "/execute at playername run give @a minecraft:golden_apple 1"
share:
  - "/tellraw @a {\"text\":\"uniqueId  compartio \", \"color\":\"gold\"}"
  - "/title @a title {\"text\":\"uniqueId \"}"
  - "/title @a subtitle {\"text\":\"compartio \",\"bold\":true,\"color\":\"gold\"}"
```
## Ejemplo Antiguo en yaml para el Chat
Recibiremos lo que comententen de esto
```
keywordToGive:
  escudo: "minecraft:shield"
  cama: "minecraft:red_bed"
  totem: "minecraft:totem_of_undying"
  diamante: "minecraft:diamond 2"
  diamantes: "minecraft:diamond 8"
  emi: "minecraft:sugar"
  leon: "minecraft:sand"
  arena: "minecraft:sand"
  madera: "minecraft:wooden"
  azada: "minecraft:wooden_hoe"
  azada_diamante: "minecraft:diamond_hoe"
  azada_hierro: "minecraft:iron_hoe"
  azada_madera: "minecraft:wooden_hoe"
  azada_oro: "minecraft:golden_hoe"
  azada_piedra: "minecraft:stone_hoe"
  azucar: "minecraft:sugar"
  cake keke: "minecraft:cake"
  azucar caña: "minecraft:sugar_cane"
  azucar calabaza: "minecraft:pumpkin_seeds"
  azucar melón: "minecraft:melon_seeds"
  azucar pasto: "minecraft:wheat_seeds"
  azucar trigo: "minecraft:wheat_seeds"
  azucar zanahoria: "minecraft:carrot"
  azucar patata: "minecraft:potato"
  azucar remolacha: "minecraft:beetroot_seeds"
  azucar cacao: "minecraft:cocoa_beans"
  azucar alga: "minecraft:kelp"
  carbón: "minecraft:coal_block"
  cuarzo: "minecraft:quartz_block"
  emerald: "minecraft:emerald_block"
  hierro: "minecraft:iron_block"
  lapislazuli: "minecraft:lapis_block"
  netherita: "minecraft:netherite_block"
  netherite: "minecraft:netherite_block"
  oro: "minecraft:gold_block"
  redstone: "minecraft:redstone_block"
  slime: "minecraft:slime_block"
  piedra: "minecraft:stone"
  obsidiana: "minecraft:obsidian"
  terracota: "minecraft:terracotta"
  vidrio: "minecraft:glass"
  carbon: "minecraft:coal"
  carne: "minecraft:beef"
  carne_cocida: "minecraft:cooked_beef"
  carne cerdo: "minecraft:porkchop"
  carne cerdo_cocida: "minecraft:cooked_porkchop"
  carne conejo: "minecraft:rabbit"
  carne conejo_cocida: "minecraft:cooked_rabbit"
  carne pollo: "minecraft:chicken"
  carne pollo_cocida: "minecraft:cooked_chicken"
  carne venado: "minecraft:deer"
  carne venado_cocida: "minecraft:cooked_deer"
  caña azucar: "minecraft:sugar_cane"
  caña bambu: "minecraft:bamboo"
  caña pescar: "minecraft:fishing_rod"
  ceniza: "minecraft:ashes"
  cobre: "minecraft:copper_ingot"
  cobre_puro: "minecraft:raw_copper_block"
  cono resina: "minecraft:resin"
  crema magma: "minecraft:magma_cream"
  crisalida: "minecraft:chorus_fruit"
  cristal: "minecraft:crystal"
  cristal amatista: "minecraft:amethyst_crystal"
  cristal hielo: "minecraft:packed_ice"
  cristal end: "minecraft:end_crystal"
  cristal end_destruido: "minecraft:dragon_breath"
  cristal nether: "minecraft:nether_quartz"
  cuenco: "minecraft:bowl"
  cuerda: "minecraft:string"
  arco: "minecraft:bow"
  antorcha: "minecraft:torch"
  redstone_glow: "minecraft:glowstone_dust"
  redstone_luz mar: "minecraft:sea_lantern"
  piedra_luminosa: "minecraft:stone_luminite"
  redstone_antorcha: "minecraft:redstone_torch"
  joya: "minecraft:diamond"
  diamante_bruto: "minecraft:raw_diamond"
  pepita oro: "minecraft:gold_ingot"
  ender_perla: "minecraft:ender_pearl"
  ender_ojo: "minecraft:ender_eye"
  endojo: "minecraft:ender_eye"
  redstone": "minecraft:redstone"
  redstone_glow": "minecraft:glowstone_dust"
  redstone_luz mar": "minecraft:sea_lantern"
  piedra_luminosa": "minecraft:stone_luminite"
  redstone_antorcha": "minecraft:redstone_torch"
  joya": "minecraft:diamond"
  diamante_bruto": "minecraft:raw_diamond"
  pepita oro": "minecraft:gold_ingot"
  ender_perla": "minecraft:ender_pearl"
  ender_ojo": "minecraft:ender_eye"
  endojo": "minecraft:ender_eye"
  esmeralda": "minecraft:emerald"
  esmeralda_bruta": "minecraft:raw_emerald"
  enredadera": "minecraft:vine"
  escama dragón": "minecraft:dragon_scale"
  flecha": "minecraft:arrow 10"
  flechas": "minecraft:arrow 10"
  flecha_fuego": "minecraft:tipped_arrow"
  flecha_perforadora": "minecraft:pointed_dripstone_arrow"
  flecha_espectral": "minecraft:spectral_arrow"
  flecha end": "minecraft:end_arrow"
  flecha nether": "minecraft:nether_arrow"
  fuego": "minecraft:fire"
  goma": "minecraft:slime_ball"
  globo": "minecraft:balloon"
  galleta": "minecraft:cookie"
  huevo": "minecraft:egg"
  hormiga": "minecraft:ant_spawn_egg"
  hueso": "minecraft:bone"
  hacha": "minecraft:iron_axe"
  pico": "minecraft:iron_pickaxe"
  espada": "minecraft:diamond_sword{Enchantments:[{id:\"minecraft:sharpness\"lvl:10}{id:\"minecraft:looting\"lvl:3}]} 1"
  armadura": "minecraft:diamond_leggings{Enchantments:[{id:\"minecraft:protection\"lvl:10}]} 1"
  pechera": "minecraft:diamond_chet{Enchantments:[{id:\"minecraft:protection\"lvl:10}]} 1"
  hierro": "minecraft:iron_ingot"
  harina": "minecraft:flour"
  jaula": "minecraft:cage"
  jamon": "minecraft:ham"
  jardin": "minecraft:garden"
  kelp": "minecraft:kelp"
  koi": "minecraft:koi_spawn_egg"
  lana": "minecraft:wool"
  lapislazuli": "minecraft:lapis_lazuli"
  libro": "minecraft:book"
  linterna": "minecraft:lantern"
  leche": "minecraft:milk_bucket"
  agua": "minecraft:water_bucket"
  lava": "minecraft:lava_bucket"
  manzana": "minecraft:golden_apple"
  manzana dorada": "minecraft:enchanted_golden_apple"
  manzana encantada": "minecraft:enchanted_golden_apple"
  melón": "minecraft:melon"
  nabo": "minecraft:beetroot"
  nugget": "minecraft:nugget"
  nuez": "minecraft:acorn"
  pan": "minecraft:bread"
  panes": "minecraft:bread"
  berries": "minecraft:sweet_berries"
  llama": "minecraft:llama_spawn_egg"
  oro": "minecraft:gold_ingot"
  roca": "minecraft:stone"
  piedra": "minecraft:cobblestone"
  ramita": "minecraft:stick"
  palo": "minecraft:stick"
  ramo": "minecraft:bouquet"
  sal": "minecraft:salt"
  semilla": "minecraft:seed"
  tierra": "minecraft:dirt"
  tinta": "minecraft:ink_sac"
  uva": "minecraft:grape"
  vaca": "minecraft:cow_spawn_egg"
  zanahoria": "minecraft:carrot"
  zapato": "minecraft:shoe"
  zorro": "minecraft:fox_spawn_egg"
  resina": "minecraft:resin"
  magma": "minecraft:magma_cream"
  chorus": "minecraft:chorus_fruit"
  amatista": "minecraft:amethyst_crystal"
  hielo": "minecraft:packed_ice"
  end": "minecraft:end_crystal"
  nether": "minecraft:nether_quartz"
  elytra": "minecraft:elytra"
  nether_pulido": "minecraft:polished_nether_quartz"
  nether_bruto": "minecraft:raw_nether_quartz"
  cohete": "minecraft:firework_rocket"
  cuarzo": "minecraft:quartz"
  tnt": "minecraft:tnt 10"
  mechero": "minecraft:flint_and_steel"
  bote": "minecraft:boat"
keywordToMob:
  enderman": "minecraft:enderman"
  cerdo": "minecraft:pig"
  oveja": "minecraft:sheep"
  vaca": "minecraft:cow"
  pollo": "minecraft:chicken"
  conejo": "minecraft:rabbit"
  caballo": "minecraft:horse"
  burro": "minecraft:donkey"
  mula": "minecraft:mule"
  murciélago": "minecraft:bat"
  lorito": "minecraft:parrot"
  loro": "minecraft:parrot"
  aldeano": "minecraft:villager"
  golem hierro": "minecraft:iron_golem"
  golem nieve": "minecraft:snow_golem"
  abeja": "minecraft:bee"
  gato": "minecraft:cat"
  perro": "minecraft:dog"
  zorro": "minecraft:fox"
  cabr": "minecraft:goat"
  panda": "minecraft:panda"
  oso_polar": "minecraft:polar_bear"
  tortuga": "minecraft:turtle"
  delfin": "minecraft:dolphin"
  llama": "minecraft:llama"
  lobo": "minecraft:wolf"
  perrito": "minecraft:wolf"
  vindicador": "minecraft:vindicator"
  vacahongo": "minecraft:mooshroom"
  creeper": "minecraft:creeper"
  esqueleto": "minecraft:skeleton"
  zombi": "minecraft:zombie"
  araña": "minecraft:spider"
  slime": "minecraft:slime"
  ghast": "minecraft:ghast"
  evocador": "minecraft:evoker"
  bruja": "minecraft:witch"
  zombi_pigman": "minecraft:zombified_piglin"
  endermite": "minecraft:endermite"
  lobo_manso": "minecraft:tamed_wolf"
  esqueleto_wither": "minecraft:wither_skeleton"
  gatito": "minecraft:tabby_cat"
  gato_atigrado": "minecraft:tabby_cat"
  gato_negro": "minecraft:black_cat"
  gato_rojo": "minecraft:red_cat"
  gato_siames": "minecraft:siamese_cat"
  guardian": "minecraft:guardian"
  anciano_guardian": "minecraft:elder_guardian"
  shulker": "minecraft:shulker"
  enderdragon": "minecraft:ender_dragon"
  vexito": "minecraft:vex"
  esqueleto_estrangulador": "minecraft:stray"
  zombi_villager": "minecraft:zombie_villager"
  husk": "minecraft:husk"
  caballo_esqueleto": "minecraft:skeleton_horse"
  caballo_zombi": "minecraft:zombie_horse"
  ocelote": "minecraft:ocelot"
  blaze": "minecraft:blaze"
  magma_cube": "minecraft:magma_cube"
  esqueleto_ataviado": "minecraft:armored_skeleton"
  esqueleto_ataviado_fuego": "minecraft:burning_skeleton"
  golem hoglin": "minecraft:hoglin"
  pez": "minecraft:salmon"
  zombi_vaquero": "minecraft:husk"
  ```