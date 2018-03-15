import { Component, OnInit } from '@angular/core';
import { Monster } from '../monster';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})
export class MonstersComponent implements OnInit {
    monsters = [
        new Monster(1, "Azure Rathalos", "Dragon"),
        new Monster(2, "Anjanath", "Water"),
        new Monster(3, "Bazelgeuse", "Lightning"),
        new Monster(4, "Barroth", "Fire, Water"),
        new Monster(5, "Black Diablos", "Ice"),
        new Monster(6, "Diablos", "Ice"),
        new Monster(7, "Dodogama", "Lightning"),
        new Monster(8, "Great Giros", "Water"),
        new Monster(9, "Great Jagras", "Fire"),
        new Monster(10, "Jyuratodus", "Lightning, Water"),
        new Monster(11, "Kirin", "Fire"),
        new Monster(12, "Kulu-Ya-Ku", "Water"),
        new Monster(13, "Kushala Daora", "Lightning"),
        new Monster(14, "Lavasioth", "Water"),
        new Monster(15, "Legiana", "Lightning"),
        new Monster(16, "Nergigante", "Lightning"),
        new Monster(17, "Odogaron", "Ice"),
        new Monster(18, "Paolumu", "Fire"),
        new Monster(19, "Pukei-Pukei", "Lightning"),
        new Monster(20, "Pink Rathian", "Dragon"),
        new Monster(21, "Radobaan", "Dragon"),
        new Monster(22, "Rathalos", "Dragon"),
        new Monster(23, "Rathian", "Dragon"),
        new Monster(24, "Teostra", "Ice, Water"),
        new Monster(25, "Tobi-Kadachi", "Water"),
        new Monster(26, "Tzitzi-Yaku", "Ice, Lightning"),
        new Monster(27, "Uragaan", "Water"),
        new Monster(28, "Vaal Hazak", "Fire, Dragon"),
        new Monster(29, "Xeno'jiiva", ""),
        new Monster(30, "Zorah Magdaros", "Dragon, Water")
    ];

    constructor() { }

    ngOnInit() {
    }

}
