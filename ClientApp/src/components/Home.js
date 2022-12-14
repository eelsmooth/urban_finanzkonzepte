import React, { Component } from 'react';
import { BsCheck, BsCheckLg, BsX } from 'react-icons/bs';
import Video from "./vid1.mp4";
import { BrowserRouter as Router, Link } from 'react-router-dom';

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
    }
    componentDidMount() {
        const handler = e => this.setState({ matches: e.matches });
        window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
    }
    static displayName = Home.name;

    render() {
        return (
            <div> 
                <div class="centerText2"><b>Ab 100&euro; pro Monat zu 8-14% Gewinn pro Jahr</b></div>
                <h1 class="centerText">Sicher investieren ohne selbst Finanzexperte sein zu m&uuml;ssen</h1>
                <div class="centerText2"><b>Du hast keinerlei Aufwand, weil wir Alles f&uuml;r dich umsetzen. Von A bis Z.</b></div>
                <div className="grid-container">
                    
                    {this.state.matches && (
                        <div class="item1">
                            <video controls width="auto" height="350" autoPlay muted src={Video} type="video/mp4" />
                        </div>
                    )}
                    {!this.state.matches && (
                        <video controls width="auto" height="250" autoPlay muted src={Video} type="video/mp4" />
                    )}
                    
                    {this.state.matches && (
                        <p class="itemTextOld"><BsCheckLg /> <b>8-12x mehr Endkapital</b> als vergleichbare Geldanlagen, weil wir Strategien der oberen 1% anwenden.</p>
                     )}
                   {this.state.matches && (
                        <p class="itemTextOld"><BsCheckLg /> <b>Spare Steuern</b> - die du bei anderen Anlagen auf all deine Gewinne zahlen müsstest - weil wir deine Anlage professionell steuerlich optimieren.</p>
                    )}
                    {this.state.matches && (
                        <p class="itemTextOld"><BsCheckLg /> <b>Keine versteckten Kosten</b> aufgrund vollständiger Transparenz.</p>
                    )}
                    { this.state.matches && (
                        <p class="itemTextOld"><BsCheckLg /> <b>​Garantierte, sichere Ergebnisse</b> aufgrund von bewiesenen Methoden (keine Meinungen).</p>
                    )}
                    {this.state.matches && (
                        <p class="itemTextOld"><BsCheckLg /> <b>​Flexibel bleiben</b>, weil du dich nicht an Laufzeiten bindest.Du kannst jederzeit Beiträge erhöhen oder senken, Geld auszahlen, usw.</p>
                    )}
                </div>
                {!this.state.matches && (
                    <p class="itemTextOld"><BsCheckLg /> <b>8-12x mehr Endkapital</b> als vergleichbare Geldanlagen, weil wir Strategien der oberen 1% anwenden.</p>
                )}
                {!this.state.matches && (
                    <p class="itemTextOld"><BsCheckLg /> <b>Spare Steuern</b> - die du bei anderen Anlagen auf all deine Gewinne zahlen müsstest - weil wir deine Anlage professionell steuerlich optimieren.</p>
                )}
                {!this.state.matches && (
                    <p class="itemTextOld"><BsCheckLg /> <b>Keine versteckten Kosten</b> aufgrund vollständiger Transparenz.</p>
                )}
                {!this.state.matches && (
                    <p class="itemTextOld"><BsCheckLg /> <b>​Garantierte, sichere Ergebnisse</b> aufgrund von bewiesenen Methoden (keine Meinungen).</p>
                )}
                {!this.state.matches && (
                    <p class="itemTextOld"><BsCheckLg /> <b>​Flexibel bleiben</b>, weil du dich nicht an Laufzeiten bindest.Du kannst jederzeit Beiträge erhöhen oder senken, Geld auszahlen, usw.</p>
                )}
                {this.state.matches && (
                    <div class="btn1">
                        <Link to="/formular">
                            <button type="button" class="btn3" to="/formular">
                                <div><b class="btnTextMain">Jetzt Erstgespr&auml;ch vereinbaren</b></div>
                                <div class="btnTextSub">100% kostenlos und unverbindlich.</div>
                            </button>
                        </Link>
                        <p className="newText">Wir melden uns innerhalb von 48 Stunden.</p>
                    </div>
                )}
                {this.state.matches && (
                    <div class="btn2">
                        <img class="txtbtnblckpc" width="auto" height="100" src={require('./bwt.png')} />
                    </div>
                )}

                {!this.state.matches && (
                    <div class="btn1">
                        <Link to="/formular">
                            <button type="button" class="btn3" to="/formular">
                                <div><b class="btnTextMain">Jetzt Erstgespr&auml;ch vereinbaren</b></div>
                                <div class="btnTextSub">100% kostenlos und unverbindlich.</div>
                            </button>
                        </Link>
                        <p className="newText">Wir melden uns innerhalb von 48 Stunden.</p>
                    </div>
                )}
                {!this.state.matches && (
                    <div className="btn1">
                        <img class="txtbtnblck" width="auto" height="80" src={require('./bwt.png')} />
                    </div>
                )}
                {this.state.matches && (
                    <div class="blkfooter2">
                        <p></p><br /><br />
                        <h2 class="centerTexter">Die 8 häufigsten "Geldanlagen", mit denen du Unsummen verschenkst</h2><br /><br />
                        <div className="onlyLeft">
                            <div class="grid-container">
                                <p class="itemText"><BsX />  Bausparverträge</p>
                                <p class="itemText"><BsX />  Riester-Verträge</p>
                                <p class="itemText"><BsX />  Sparbücher</p>
                                <p class="itemText"><BsX />  ​​Betriebliche Altersvorsorge</p>
                                <p class="itemText"><BsX />  Girokonten</p>
                                <p class="itemText"><BsX />  Depots/Broker (Aktien, ETFs, Fonds)</p>
                                <p class="itemText"><BsX />  ​Krypto-Währungen</p>
                                <p class="itemText"><BsX />  ​Lebensversicherungen</p>
                            </div>
                        </div>
                        <div className="onlyLeft2">
                            <Link to="/formular">
                                <button type="button" class="btn3" to="/formular">
                                    <div><b class="btnTextMain">Jetzt Erstgespr&auml;ch vereinbaren</b></div>
                                    <div class="btnTextSub">100% kostenlos und unverbindlich.</div>
                                </button>
                            </Link>
                            <p className="btnTextMainInWhite2">Wir melden uns innerhalb von 48 Stunden.</p>
                        </div>
                    </div>
                )}
                {!this.state.matches && (
                    <div class="blkfooter2">
                        <p></p><br /><br />
                        <h3 class="centerTexter">Die 8 häufigsten "Geldanlagen", mit denen du Unsummen verschenkst</h3><br /><br />
                        <div className="onlyLeft">
                            <p class="itemText123"><BsX />  Bausparverträge</p>
                            <p class="itemText123"><BsX />  Riester-Verträge</p>
                            <p class="itemText123"><BsX />  Sparbücher</p>
                            <p class="itemText123"><BsX />  ​​Betriebliche Altersvorsorge</p>
                            <p class="itemText123"><BsX />  Girokonten</p>
                            <p class="itemText123"><BsX />  Depots/Broker (Aktien, ETFs, Fonds)</p>
                            <p class="itemText123"><BsX />  ​Krypto-Währungen</p>
                            <p class="itemText123"><BsX />  ​Lebensversicherungen</p>
                        </div>
                        <div class="btn1">
                            <Link to="/formular">
                                <button type="button" class="btn3" to="/formular">
                                    <div><b class="btnTextMain">Jetzt Erstgespr&auml;ch vereinbaren</b></div>
                                    <div class="btnTextSub">100% kostenlos und unverbindlich.</div>
                                </button>
                            </Link>
                            <p className="btnTextMainInWhite">Wir melden uns innerhalb von 48 Stunden.</p>
                        </div>
                    </div>
                )}
                <br /><br /><br /><br />
                <h1 class="bigFont"><p>Es ist viel mehr möglich</p></h1><br /><br />
                {this.state.matches && (
                    <img width="auto" height="800" src="https://images.clickfunnels.com/60/f78ec0a76e43d0a7dc29b220d5d43f/Kopie-von-Das-Problem-mit-der-Inflation-1-.svg" />
                )}
                {!this.state.matches && (
                    <div className="newSkizz">
                        <img width="100%" height="auto" src="https://images.clickfunnels.com/60/f78ec0a76e43d0a7dc29b220d5d43f/Kopie-von-Das-Problem-mit-der-Inflation-1-.svg" />
                    </div>
                     )}
                <br /><br /><br /><br />
                <h1 class="bigFont"><p>Kleine Optimierungen bringen 6- bis 7-stellige Summen</p></h1><br /><br />
                {this.state.matches && (
                    <img width="auto" height="800" src="https://images.clickfunnels.com/ab/50acd8c0f943229f96805782471cc4/Kopie-von-Das-Problem-mit-der-Inflation-3-.svg" />
                )}
                {!this.state.matches && (
                    <div className="newSkizz">
                        <img width="100%" height="auto" src="https://images.clickfunnels.com/ab/50acd8c0f943229f96805782471cc4/Kopie-von-Das-Problem-mit-der-Inflation-3-.svg" />
                    </div>
                )}

                <br /><br /><br /><br /><br /><br />
                {this.state.matches && (
                    <div class="btnDiv4">
                        <Link to="/formular">
                            <button type="button" class="btn3" to="/formular">
                                <div><b class="btnTextMain">Jetzt Erstgespr&auml;ch vereinbaren</b></div>
                                <div class="btnTextSub">100% kostenlos und unverbindlich.</div>
                            </button>
                        </Link>
                        <p className="newText2">Wir melden uns innerhalb von 48 Stunden.</p>
                    </div>
                )}
                {!this.state.matches && (
                    <div class="btn1">
                        <Link to="/formular">
                            <button type="button" class="btn3" to="/formular">
                                <div><b class="btnTextMain">Jetzt Erstgespr&auml;ch vereinbaren</b></div>
                                <div class="btnTextSub">100% kostenlos und unverbindlich.</div>
                            </button>
                        </Link>
                        <p className="newText">Wir melden uns innerhalb von 48 Stunden.</p>
                    </div>
                  )}
                <br /><br /><br />
                {this.state.matches && (
                    <div class="blkfooterLUL">
                        <p></p><br /><br />
                        <h1 class="centerTexter">Häufige Irrglauben</h1><br /><br />
                        <div class="grid-container">
                            <p class="itemText"><BsX size={35} style={{ color: 'orange' }} />
                                "Wenn ich mir Hilfe hole, habe ich Angst, meine Finanzen aus der Hand zu geben."</p>
                            <p class="itemText"><BsX size={35} style={{ color: 'orange' }} />
                                "Um sein Geld perfekt anzulegen, muss man schon viel Geld haben."</p>
                            <p class="itemText"><BsX size={35} style={{ color: 'orange' }} />
                                "Mit guten Apps kann ich mein Geld auch selbst optimal anlegen."</p>
                            <p class="itemText"><BsX size={35} style={{ color: 'orange' }} />
                                "Aktien, die ich selbst aussuche, sind die besten."</p>
                            <p class="itemText"><BsX size={35} style={{ color: 'orange' }} />
                                "Günstige ETFs bei einem günstigen Broker reichen auch."</p>
                            <p class="itemText"><BsX size={35} style={{ color: 'orange' }} />
                                "​Finanzberater arbeiten nur in ihre eigene Tasche."</p>
                            <p class="itemText"><BsX size={35} style={{ color: 'orange' }} />
                                "In YouTube-Videos bekomme ich das nötige Wissen."</p>
                            <p class="itemText"><BsX size={35} style={{ color: 'orange' }} />
                                "<b>Kryptowährungen</b> sind die Zukunft."</p>
                        </div>
                        <div class="btnDiv4">
                            <Link to="/formular">
                                <button type="button" class="btn3" to="/formular">
                                    <div><b class="btnTextMain">Jetzt Erstgespr&auml;ch vereinbaren</b></div>
                                    <div class="btnTextSub">100% kostenlos und unverbindlich.</div>
                                </button>
                            </Link>
                            <p className="btnTextMainInWhite2">Wir melden uns innerhalb von 48 Stunden.</p>
                        </div>
                    </div>
                )}
                {!this.state.matches && (
                    <div class="blkfooterXR">
                        <p></p><br /><br />
                        <h3 class="centerTexter">Häufige Irrglauben</h3><br /><br />
                        <p class="itemTextR"><BsX size={35} style={{color: 'orange' }} />
                            "Wenn ich mir Hilfe hole, habe ich Angst, meine Finanzen aus der Hand zu geben."</p>
                        <p class="itemTextR"><BsX size={35} style={{ color: 'orange' }} />
                            "Um sein Geld perfekt anzulegen, muss man schon viel Geld haben."</p>
                        <p class="itemTextR"><BsX size={35} style={{ color: 'orange' }} />
                            "Mit guten Apps kann ich mein Geld auch selbst optimal anlegen."</p>
                        <p class="itemTextR"><BsX size={35} style={{ color: 'orange' }} />
                            "Aktien, die ich selbst aussuche, sind die besten."</p>
                        <p class="itemTextR"><BsX size={35} style={{ color: 'orange' }} />
                            "Günstige ETFs bei einem günstigen Broker reichen auch."</p>
                        <p class="itemTextR"><BsX size={35} style={{ color: 'orange' }} />
                            "​Finanzberater arbeiten nur in ihre eigene Tasche."</p>
                        <p class="itemTextR"><BsX size={35} style={{ color: 'orange' }} />
                            "In YouTube-Videos bekomme ich das nötige Wissen."</p>
                        <p class="itemTextR"><BsX size={35} style={{ color: 'orange' }} />
                            "<b>Kryptowährungen</b> sind die Zukunft."</p>
                        <div class="btn1">
                            <Link to="/formular">
                                <button type="button" class="btn3" to="/formular">
                                    <div><b class="btnTextMain">Jetzt Erstgespr&auml;ch vereinbaren</b></div>
                                    <div class="btnTextSub">100% kostenlos und unverbindlich.</div>
                                </button>
                            </Link>
                            <p className="btnTextMainInWhite">Wir melden uns innerhalb von 48 Stunden.</p>
                        </div>
                    </div>
                )}
                <br /><br /><br />
                {this.state.matches && (
                    <div>
                        <h1 class="bigFont">Die 5 häufigsten Gründe, die dich aktuell noch davon trennen, 6- bis 7-stelliges Vermögen aufzubauen</h1><br /><br />
                        <p></p>
                        <div class="grid-container4X1">
                            <div class="item3">
                                <b>Fehlendes Wissen</b>
                                <p>Dein fehlendes Wissen kann dafür sorgen, dass du falsche Strategien für richtig hältst.
                                    Oder dass du so verunsichert bist, dass du quasi in "Schockstarre" gar nichts für deinen Vermögensaufbau machst.</p>
                            </div><br />
                            <div class="item3">
                                <b>Keine Zeit</b>
                                <p>Wenn du keine Zeit hast, dich mit dem Thema Finanzen zu beschäftigen, weil du z.B. einem Vollzeit-Job nachgehst,
                                    dann kann dein Vermögensaufbau im Normalfall nicht optimal gestaltet sein.</p>
                            </div><br />
                            <div class="item3">
                                <b>Probieren auf eigene Faust</b>
                                <p>Du probierst das Ganze erstmal alleine hinzubekommen. Schaust dir ggf. YouTube-Videos an oder liest dich in das Thema ein.
                                    Doch weißt du so viel, wie jemand der seit Jahren den ganzen Tag nichts anderes macht?</p>
                            </div>
                        </div>
                        <div class="grid-container4X">
                            <div class="align">
                                <b>Misstrauen gegenüber Finanzberatern</b>
                                <p>Du hast schon sehr viel schlechtes gehört von Bekannten oder Freunden, die schlechte Erfahrungen gemacht haben.
                                    Und jetzt hast du Bedenken, ob dir sowas auch passieren könnte.</p>
                            </div>
                            <div class="align">
                                <b>Vorurteile</b>
                                <p>Du denkst gerade noch "Aktien sind unsicher" oder "Immobilien sind aktuell zu teuer".
                                    Aber bist du dir denn dessen wirklich sicher oder ist das einfach etwas, das du von anderen aufgeschnappt hast und wiederholst?</p>
                            </div>
                        </div>
                        <div class="btnDiv4">
                            <Link to="/formular">
                                <button type="button" class="btn3" to="/formular">
                                    <div><b class="btnTextMain">Jetzt Erstgespr&auml;ch vereinbaren</b></div>
                                    <div class="btnTextSub">100% kostenlos und unverbindlich.</div>
                                </button>
                            </Link>
                            <p className="newText2">Wir melden uns innerhalb von 48 Stunden.</p>
                        </div>
                    </div>
                )}
                {!this.state.matches && (
                    <div>
                        <h3 class="margin">Die 5 häufigsten Gründe, die dich aktuell noch davon trennen, 6- bis 7-stelliges Vermögen aufzubauen</h3><br /><br />
                        <div class="item3">
                            <b>Fehlendes Wissen</b>
                            <p>Dein fehlendes Wissen kann dafür sorgen, dass du falsche Strategien für richtig hältst.
                                Oder dass du so verunsichert bist, dass du quasi in "Schockstarre" gar nichts für deinen Vermögensaufbau machst.</p>
                        </div><br />
                        <div class="item3">
                            <b>Keine Zeit</b>
                            <p>Wenn du keine Zeit hast, dich mit dem Thema Finanzen zu beschäftigen, weil du z.B. einem Vollzeit-Job nachgehst,
                                dann kann dein Vermögensaufbau im Normalfall nicht optimal gestaltet sein.</p>
                        </div><br />
                        <div class="item3">
                            <b>Probieren auf eigene Faust</b>
                            <p>Du probierst das Ganze erstmal alleine hinzubekommen. Schaust dir ggf. YouTube-Videos an oder liest dich in das Thema ein.
                                Doch weißt du so viel, wie jemand der seit Jahren den ganzen Tag nichts anderes macht?</p>
                        </div>
                        <div class="item3">
                            <b>Misstrauen gegenüber Finanzberatern</b>
                            <p>Du hast schon sehr viel schlechtes gehört von Bekannten oder Freunden, die schlechte Erfahrungen gemacht haben.
                                Und jetzt hast du Bedenken, ob dir sowas auch passieren könnte.</p>
                        </div>
                        <div class="item3">
                            <b>Vorurteile</b>
                            <p>Du denkst gerade noch "Aktien sind unsicher" oder "Immobilien sind aktuell zu teuer".
                                Aber bist du dir denn dessen wirklich sicher oder ist das einfach etwas, das du von anderen aufgeschnappt hast und wiederholst?</p>
                        </div>
                        <div class="btn1">
                            <Link to="/formular">
                                <button type="button" class="btn3" to="/formular">
                                    <div><b class="btnTextMain">Jetzt Erstgespr&auml;ch vereinbaren</b></div>
                                    <div class="btnTextSub">100% kostenlos und unverbindlich.</div>
                                </button>
                            </Link>
                            <p className="newText">Wir melden uns innerhalb von 48 Stunden.</p>
                        </div>
                    </div>
                )}
               
                <br /><br /><br />

                {this.state.matches && (
                    <div>
                        <h2>Kein Finanzwissen zu haben ist NORMAL...</h2>
                        <p></p>
                        <div class="grid-container5">
                            <div class="item3">
                                <p class="lowFont">
                                    Es ist nicht deine Schuld, nicht zu wissen, wie man die Inflation für seinen Vermögensaufbau nutzt. Wie man ohne Zeiteinsatz so investiert, wie es die oberen 1% tun, oder wie man das 8- bis 12-fache aus seinem Kapital herausholt, um langfristig 6- bis 7-stellige Beträge aufzubauen.
                                </p>

                                <p class="lowFont">
                                    Woher sollst du das wissen, wenn ...
                                </p>

                                <p class="lowFont">
                                    ... man nirgendwo Finanzwissen vermittelt bekommt?
                                </p>
                                <p class="lowFont">Weder in der Schule, noch in einer Ausbildung oder einem Studium.
                                </p>
                                <p class="lowFont">Die Schule bereitet uns darauf vor, Gedichte auf 4 verschiedenen Sprachen zu interpretieren aber nicht darauf, Strategien zu entdecken, die uns vor der - quasi sicheren - Altersarmut bewahren.

                                </p>
                                <p class="lowFont">Kennst du das?
                                </p>
                                <ul>
                                    <li>
                                        <p class="lowFont">Du hast keine Ahnung, wie deine Rentensituation konkret aussehen wird und ob du genug vorsorgst?
                                        </p>
                                    </li>
                                    <li>
                                        <p class="lowFont">Du hast mal irgendwo einen Vertrag abgeschlossen aber seitdem nichts mehr von deinem Berater gehört?
                                        </p>
                                    </li>
                                    <li>
                                        <p class="lowFont">Du hast Verträge von denen du immer noch nicht so richtig weißt, wie sie eigentlich wirklich funktionieren?
                                        </p>
                                    </li>
                                    <li>
                                        <p class="lowFont">Bei den mickrigen Gewinnen, die dein Vertrag bisher erwirtschaftet hat, müsstest du 140 Jahre alt werden, um wirklich etwas davon zu haben?
                                        </p>
                                    </li>
                                    <li>
                                        <p class="lowFont">Dein Berater hat dir erzählt, dass sein Arbeitgeber der Beste ist und du fragst dich langsam, ob es nicht doch Besseres gibt?
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div class="item3">
                                <img width="auto" height="620" src={require('./big2.jpg')} />
                            </div>
                        </div>
                        <div class="btnDiv4">
                            <Link to="/formular">
                                <button type="button" class="btn3" to="/formular">
                                    <div><b class="btnTextMain">Jetzt Erstgespr&auml;ch vereinbaren</b></div>
                                    <div class="btnTextSub">100% kostenlos und unverbindlich.</div>
                                </button>
                            </Link>
                            <p className="newText2">Wir melden uns innerhalb von 48 Stunden.</p>
                        </div>
                    </div>
                )}
                {!this.state.matches && (
                    <div>
                        <h3>Kein Finanzwissen zu haben ist NORMAL...</h3>
                        <p></p>
                            <div class="item3">
                                <p class="lowFont">
                                    Es ist nicht deine Schuld, nicht zu wissen, wie man die Inflation für seinen Vermögensaufbau nutzt. Wie man ohne Zeiteinsatz so investiert, wie es die oberen 1% tun, oder wie man das 8- bis 12-fache aus seinem Kapital herausholt, um langfristig 6- bis 7-stellige Beträge aufzubauen.
                                </p>

                                <p class="lowFont">
                                    Woher sollst du das wissen, wenn ...
                                </p>

                                <p class="lowFont">
                                    ... man nirgendwo Finanzwissen vermittelt bekommt?
                                </p>
                                <p class="lowFont">Weder in der Schule, noch in einer Ausbildung oder einem Studium.
                                </p>
                                <p class="lowFont">Die Schule bereitet uns darauf vor, Gedichte auf 4 verschiedenen Sprachen zu interpretieren aber nicht darauf, Strategien zu entdecken, die uns vor der - quasi sicheren - Altersarmut bewahren.

                                </p>
                                <p class="lowFont">Kennst du das?
                                </p>
                                <ul>
                                    <li>
                                        <p class="lowFont">Du hast keine Ahnung, wie deine Rentensituation konkret aussehen wird und ob du genug vorsorgst?
                                        </p>
                                    </li>
                                    <li>
                                        <p class="lowFont">Du hast mal irgendwo einen Vertrag abgeschlossen aber seitdem nichts mehr von deinem Berater gehört?
                                        </p>
                                    </li>
                                    <li>
                                        <p class="lowFont">Du hast Verträge von denen du immer noch nicht so richtig weißt, wie sie eigentlich wirklich funktionieren?
                                        </p>
                                    </li>
                                    <li>
                                        <p class="lowFont">Bei den mickrigen Gewinnen, die dein Vertrag bisher erwirtschaftet hat, müsstest du 140 Jahre alt werden, um wirklich etwas davon zu haben?
                                        </p>
                                    </li>
                                    <li>
                                        <p class="lowFont">Dein Berater hat dir erzählt, dass sein Arbeitgeber der Beste ist und du fragst dich langsam, ob es nicht doch Besseres gibt?
                                        </p>
                                    </li>
                                </ul>
                            <div class="item3">
                                <img width="100%" height="auto" src={require('./alexNeu.jpg')} />
                            </div>
                        </div>
                        <div class="btn1">
                            <Link to="/formular">
                                <button type="button" class="btn3" to="/formular">
                                    <div><b class="btnTextMain">Jetzt Erstgespr&auml;ch vereinbaren</b></div>
                                    <div class="btnTextSub">100% kostenlos und unverbindlich.</div>
                                </button>
                            </Link>
                            <p className="newText">Wir melden uns innerhalb von 48 Stunden.</p>
                        </div>
                    </div>
                )}
                <br /><br />
                {this.state.matches && (
                    <div>
                        <h2 className="bigFont">Das sagen unsere Kunden über uns</h2>
                        <div class="bewertungen">
                            <div>
                                <img className="bewertung" width="auto" height="180" src={require('./pic1.png')} />
                            </div>
                            <p></p>
                            <div>
                                <img className="bewertung" width="auto" height="180" src={require('./pic2.png')} />
                            </div>
                            <p></p>
                            <div>
                                <img className="bewertung" width="auto" height="160" src={require('./pic3.png')} />
                            </div>
                            <p></p>
                        </div>
                    </div>
                )}
                {!this.state.matches && (
                    <div>
                        <h2 className="bigFont">Das sagen unsere Kunden über uns</h2>
                        <div class="newSkizz">
                                <img className="bewertung" width="100%" height="auto" src={require('./pic1.png')} />
                         </div>
                            <p></p>
                        <div class="newSkizz">
                                <img className="bewertung" width="100%" height="auto" src={require('./pic2.png')} />
                         </div>
                            <p></p>
                        <div class="newSkizz">
                                <img className="bewertung" width="100%" height="auto" src={require('./pic3.png')} />
                         </div>
                            <p></p>
                    </div>
                )}
                <div class="btnBewertung">
                    <Link style={{ textDecoration: 'none'}} to="/formular">
                        <button type="button" class="btn3x" to="/formular">
                            <div><b class="btnTextMain">Jetzt Erstgespr&auml;ch vereinbaren</b></div>
                            <div class="btnTextSub">100% kostenlos und unverbindlich.</div>
                        </button>
                    </Link>
                    <p className="txtbtnblck">Wir melden uns innerhalb von 48 Stunden.</p>
                </div>
                <h1 class="centerTexterBlack">So kannst du mit uns zusammenarbeiten</h1><br /><br />
                {this.state.matches && (
                    <div class="blkfooterSteps">
                        <p></p><br /><br />
                        <div class="grid-containerthatnew">
                            <div class="thatnewitem2"><h1><b>1</b></h1></div>
                            <div class="thatnewitem2"><h1><b>2</b></h1></div>
                            <div class="thatnewitem2"><h1><b>3</b></h1></div>
                            <div class="thatnewitem"><h3>Erstgespräch buchen</h3></div>
                            <div class="thatnewitem"><h3>Erstgespräch</h3></div>
                            <div class="thatnewitem"><h3>Beratung</h3></div>
                            <div class="thatnewitem3">Klicke auf einen der Buttons und fülle das Formular aus.</div>
                            <div class="thatnewitem3">Wir nehmen in 15 Minuten am Telefon die erste Analyse deiner Situation vor und geben dir wertvolle Tipps für deine Anlage.</div>
                            <div class="thatnewitem3">Wir zeigen dir unsere Strategie im Detail und du entscheidest, ob du diese von uns umsetzen lassen möchtest,
                                um automatisiert ein 6- bis 7-stelliges Vermögen aufzubauen.</div>  
                        </div>
                    </div>
                )}
                {!this.state.matches && (
                    <div class="blkfooterSteps2">
                        <p></p><br /><br />
                        <div class="grid-containerthatnew2">
                            <div class="thatnewitem2"><h1><b>1</b></h1></div>
                            <div class="thatnewitem"><h3>Erstgespräch buchen</h3></div>
                            <div class="thatnewitem4">Klicke auf einen der Buttons und fülle das Formular aus.</div>
                            <div class="thatnewitem2"><h1><b>2</b></h1></div>
                            <div class="thatnewitem"><h3>Erstgespräch</h3></div>
                            <div class="thatnewitem4">Wir nehmen in 15 Minuten am Telefon die erste Analyse deiner Situation vor und geben dir wertvolle Tipps für deine Anlage.</div>
                            <div class="thatnewitem2"><h1><b>3</b></h1></div>
                            <div class="thatnewitem"><h3>Beratung</h3></div>
                            <div class="thatnewitem4">Wir zeigen dir unsere Strategie im Detail und du entscheidest, ob du diese von uns umsetzen lassen möchtest,
                                um automatisiert ein 6- bis 7-stelliges Vermögen aufzubauen.</div>
                        </div>
                    </div>
                )}
                <div class="btnBewertungUnten">
                    <Link style={{ textDecoration: 'none' }} to="/formular">
                        <button type="button" class="btn3x" to="/formular">
                            <div><b class="btnTextMain">Jetzt Erstgespr&auml;ch vereinbaren</b></div>
                            <div class="btnTextSub">100% kostenlos und unverbindlich.</div>
                        </button>
                    </Link>
                    <p className="txtbtnblck">Wir melden uns innerhalb von 48 Stunden.</p>
                </div>
                {this.state.matches && (
                    <div class="blkfooterX">
                        <div class="grid-container9">
                            <a className="whiteTextNew" style={{ textDecoration: 'none', color: 'white' }}
                                href="https://www.ovb.de/service-faq/impressum.html">Impressum</a>
                            <a className="whiteTextNew" style={{ textDecoration: 'none', color: 'white' }}
                                href="https://www.ovb.eu/datenschutz.html">Datenschutz</a>
                            <a className="whiteTextNew" style={{ textDecoration: 'none', color: 'white' }}
                                href="https://www.instagram.com/agentur_urban/">Instagram</a>
                        </div>
                        <div class="newSkizz">
                            <p className="centerTextAlex">© 2022 Urban Finanzkonzepte. All Rights Reserved.</p>
                        </div>
                    </div>
                )}
                {!this.state.matches && (
                    <div class="blkfooter">
                        <div class="grid-container9">
                            <a className="whiteTextNew" style={{ textDecoration: 'none', color: 'white' }}
                                href="https://www.ovb.de/service-faq/impressum.html">Impressum</a>
                            <a className="whiteTextNew" style={{ textDecoration: 'none', color: 'white' }}
                                href="https://www.ovb.eu/datenschutz.html">Datenschutz</a>
                            <a className="whiteTextNew" style={{ textDecoration: 'none', color: 'white' }}
                                href="https://www.instagram.com/agentur_urban/">Instagram</a>
                        </div>
                        <div class="newSkizz">
                            <p className="centerTextAlex">© 2022 Urban Finanzkonzepte. All Rights Reserved.</p>
                        </div>
                    </div>
                )}

            </div >
        );
    }
}

// Buttons
// Umlaute Ä Ö Ü
// Responsive

// mobile/tablet