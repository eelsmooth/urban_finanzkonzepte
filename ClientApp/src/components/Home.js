import React, { Component } from 'react';
import { BsCheck, BsCheckLg } from 'react-icons/bs';
import Video from "./vid1.mp4";

export class Home extends Component {
    static displayName = Home.name;

    render() { 
        return (
            <div>
                { /* First 
                <div style={{ backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", height: 1080, width: '145%' }}>
                    <div class="firstDiv">
                        <i class="child">"Denk' früher an später."</i>
                        <br></br><br></br>
                        <h2 class="centerText">Sicher investieren ohne selbst Finanzexperte sein zu m&uuml;ssen</h2>
                    </div>
                    <div class="firstDiv">
                        <button type="button" class="btn btn-success btn-lg border-dark">
                            <div><b class="btnTextMain">Jetzt Erstgespr&auml;ch vereinbaren</b></div>
                            <div class="btnTextSub">100% kostenlos und unverbindlich.</div>
                        </button>
                    </div>
                </div>*/ }
                
                <div class="centerText2"><b>Ab 100&euro; pro Monat zu 8-14% Gewinn pro Jahr</b></div>
                <h2 class="centerText">Sicher investieren ohne selbst Finanzexperte sein zu m&uuml;ssen</h2>
                <div class="centerText3"><b>Du hast keinerlei Aufwand, weil wir Alles f&uuml;r dich umsetzen. Von A bis Z.</b></div>
                <div class="grid-container">
                    <div class="item1">
                        <video controls width="auto" height="350" autoPlay muted src={Video} type="video/mp4" />
                    </div>
                    <div class="item2">
                        <p class="itemText"><BsCheckLg /> <b>8-12x mehr Endkapital</b> als vergleichbare Geldanlagen, weil wir Strategien der oberen 1% anwenden.</p>
                    </div>
                    <div class="item2">
                        <p class="itemText"><BsCheckLg /> <b>Spare Steuern</b> - die du bei anderen Anlagen auf all deine Gewinne zahlen müsstest - weil wir deine Anlage professionell steuerlich optimieren.</p>
                    </div>
                    <div class="item2">
                        <p class="itemText"><BsCheckLg /> <b>Keine versteckten Kosten</b> aufgrund vollständiger Transparenz.</p>
                    </div>
                    <div class="item2">
                        <p class="itemText"><BsCheckLg /> <b>​Garantierte, sichere Ergebnisse</b> aufgrund von bewiesenen Methoden (keine Meinungen).</p>
                    </div>
                    <div class="item2">
                        <p class="itemText"><BsCheckLg /> <b>​Flexibel bleiben</b>, weil du dich nicht an Laufzeiten bindest.Du kannst jederzeit Beiträge erhöhen oder senken, Geld auszahlen, usw.</p>
                    </div>
                </div>
                <div class="grid-container2">
                    <div class="item1">
                        <button type="button" class="btn btn-success btn-lg border-dark">
                            <div><b class="btnTextMain">Jetzt Erstgespr&auml;ch vereinbaren</b></div>
                            <div class="btnTextSub">100% kostenlos und unverbindlich.</div>
                        </button>
                    </div>
                    <div class="item2">
                        <img width="auto" height="100" src="https://images.clickfunnels.com/b5/9214e05d1840de8818f7ff40920da8/Bekannt-aus-4-.svg" />
                    </div>
                </div>
                <div>
                    <b>Bekannt aus:</b>
                    <div class="grid-container">
                        <div class="item2">
                            Bild 1
                        </div>
                        <div class="item2">
                            Bild 2
                        </div>
                        <div class="item3">
                            Bild 3
                        </div>
                    </div>
                </div>
                <div class="black">
                    <b>Die 8 häufigsten "Geldanlagen", mit denen du Unsummen verschenkst</b>
                    <div class="grid-container">
                        <div class="item2">
                            <p class="itemText"><BsCheck />  Bausparverträge</p>
                        </div>
                        <div class="item2">
                            <p class="itemText"><BsCheck />  Sparbücher</p>
                        </div>
                        <div class="item3">
                            <p class="itemText"><BsCheck />  Girokonten</p>
                        </div>
                        <div class="item2">
                            <p class="itemText"><BsCheck />  Krypto-Währungen</p>
                        </div>
                        <div class="item2">
                            <p class="itemText"><BsCheck />  Riester-Verträge</p>
                        </div>
                        <div class="item3">
                            <p class="itemText"><BsCheck />  Betriebliche Altersvorsorge</p>
                        </div>
                        <div class="item3">
                            <p class="itemText"><BsCheck />  Depots/Broker (Aktien, ETFs, Fonds)</p>
                        </div>
                        <div class="item3">
                            <p class="itemText"><BsCheck />  Lebensversicherungen</p>
                        </div>
                    </div>
                    <button type="button" class="btn btn-success btn-lg border-dark">
                        <div><b class="btnTextMain">Jetzt Erstgespr&auml;ch vereinbaren</b></div>
                        <div class="btnTextSub">100% kostenlos und unverbindlich.</div>
                    </button>
                </div>
                <div>
                    <b>Es ist viel mehr möglich</b>
                    Graph 1
                    <b>Kleine Optimierungen bringen 6- bis 7-stellige Summen</b>
                    Graph 2
                    <button type="button" class="btn btn-success btn-lg border-dark">
                        <div><b class="btnTextMain">Jetzt Erstgespr&auml;ch vereinbaren</b></div>
                        <div class="btnTextSub">100% kostenlos und unverbindlich.</div>
                    </button>
                </div>
                <div class="black">
                    <b>Häufige Irrglauben</b>
                    <div class="grid-container">
                        <div class="item2">
                            <p class="itemText"><BsCheck />  "Wenn ich mir Hilfe hole, habe ich Angst, meine Finanzen aus der Hand zu geben."</p>
                        </div>
                        <div class="item2">
                            <p class="itemText"><BsCheck />  "Um sein Geld perfekt anzulegen, muss man schon viel Geld haben."</p>
                        </div>
                        <div class="item3">
                            <p class="itemText"><BsCheck />  "Mit guten Apps kann ich mein Geld auch selbst optimal anlegen."</p>
                        </div>
                        <div class="item2">
                            <p class="itemText"><BsCheck />  ​"Aktien, die ich selbst aussuche, sind die besten."</p>
                        </div>
                        <div class="item2">
                            <p class="itemText"><BsCheck />  "Günstige ETFs bei einem günstigen Broker reichen auch."</p>
                        </div>
                        <div class="item3">
                            <p class="itemText"><BsCheck />  "​Finanzberater arbeiten nur in ihre eigene Tasche."</p>
                        </div>
                        <div class="item3">
                            <p class="itemText"><BsCheck />  "In YouTube-Videos bekomme ich das nötige Wissen."</p>
                        </div>
                        <div class="item3">
                            <p class="itemText"><BsCheck />  ​"<b>Kryptowährungen</b> sind die Zukunft."</p>
                        </div>
                    </div>
                    <button type="button" class="btn btn-success btn-lg border-dark">
                        <div><b class="btnTextMain">Jetzt Erstgespr&auml;ch vereinbaren</b></div>
                        <div class="btnTextSub">100% kostenlos und unverbindlich.</div>
                    </button>
                </div>
                <div>
                    <h2>Die 5 häufigsten Gründe, die dich aktuell noch davon trennen, 6- bis 7-stelliges Vermögen aufzubauen</h2>
                    <div class="grid-container">
                        <div class="item3">
                            <b>Fehlendes Wissen</b>Dein fehlendes Wissen kann dafür sorgen, dass du falsche Strategien für richtig hältst. Oder dass du so verunsichert bist, dass du quasi in "Schockstarre" gar nichts für deinen Vermögensaufbau machst.
                        </div>
                        <div class="item3">
                            <b>Keine Zeit</b> Wenn du keine Zeit hast, dich mit dem Thema Finanzen zu beschäftigen, weil du z.B. einem Vollzeit-Job nachgehst, dann kann dein Vermögensaufbau im Normalfall nicht optimal gestaltet sein.
                        </div>
                        <div class="item3">
                            <b>Probieren auf eigene Faust</b>Du probierst das Ganze erstmal alleine hinzubekommen. Schaust dir ggf. YouTube-Videos an oder liest dich in das Thema ein.
                            Doch weißt du so viel, wie jemand der seit Jahren den ganzen Tag nichts anderes macht?
                        </div>
                    </div>
                    <div class="grid-container">
                        <div class="item3">
                            <b>Misstrauen gegenüber Finanzberatern</b>Du hast schon sehr viel schlechtes gehört von Bekannten oder Freunden, die schlechte Erfahrungen gemacht haben. Und jetzt hast du Bedenken, ob dir sowas auch passieren könnte.
                        </div>
                        <div class="item3">
                            <b>Vorurteile</b>Du denkst gerade noch "Aktien sind unsicher" oder "Immobilien sind aktuell zu teuer". Aber bist du dir denn dessen wirklich sicher oder ist das einfach etwas, das du von anderen aufgeschnappt hast und wiederholst?
                        </div>
                    </div>
                    <button type="button" class="btn btn-success btn-lg border-dark">
                        <div><b class="btnTextMain">Jetzt Erstgespr&auml;ch vereinbaren</b></div>
                        <div class="btnTextSub">100% kostenlos und unverbindlich.</div>
                    </button>
                </div>
                <div>
                    <div class="grid-container">
                        <div class="item3">
                            <h2>Kein Finanzwissen zu haben ist NORMAL...</h2>
                            Es ist nicht deine Schuld, nicht zu wissen, wie man die Inflation für seinen Vermögensaufbau nutzt. Wie man ohne Zeiteinsatz so investiert, wie es die oberen 1% tun, oder wie man das 8- bis 12-fache aus seinem Kapital herausholt, um langfristig 6- bis 7-stellige Beträge aufzubauen.
                            Woher sollst du das wissen, wenn ...
                            ... man nirgendwo Finanzwissen vermittelt bekommt?
                            Weder in der Schule, noch in einer Ausbildung oder einem Studium.
                            Die Schule bereitet uns darauf vor, Gedichte auf 4 verschiedenen Sprachen zu interpretieren aber nicht darauf, Strategien zu entdecken, die uns vor der - quasi sicheren - Altersarmut bewahren.
                            Kennst du das?
                            - Du hast keine Ahnung, wie deine Rentensituation konkret aussehen wird und ob du genug vorsorgst?
                            - Du hast mal irgendwo einen Vertrag abgeschlossen aber seitdem nichts mehr von deinem Berater gehört?
                            - Du hast Verträge von denen du immer noch nicht so richtig weißt, wie sie eigentlich wirklich funktionieren?
                            - Bei den mickrigen Gewinnen, die dein Vertrag bisher erwirtschaftet hat, müsstest du 140 Jahre alt werden, um wirklich etwas davon zu haben?
                            - Dein Berater hat dir erzählt, dass sein Arbeitgeber der Beste ist und du fragst dich langsam, ob es nicht doch Besseres gibt?
                        </div>
                        <div class="item3">
                            Foto
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Das sagen unsere Kunden über uns</h2>
                    <img className="Kundenbewertung OVB" width="auto" height="200" src={require('./pic1.png')} />
                    <img className="Kundenbewertung OVB" width="auto" height="230" src={require('./pic2.png')} />
                    <img className="Kundenbewertung OVB" width="auto" height="200" src={require('./pic3.png')} />
                </div>
            </div>
        );
    }
}