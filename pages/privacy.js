import Layout from "../components/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <Layout home siteTitle={`3elm - ${t("navigation.privacy")}`}>
      <section className="max-w-5xl px-6 pb-40 sm:px-0">
        <h1 className="text-cohead hyphens text-fluid-l">
          {t("privacy.title")}
        </h1>
        <p>
          <br />
        </p>
        <p>
          Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen.
          Datenschutz hat einen besonders hohen Stellenwert für die
          Geschäftsleitung für folgenden Herausgeber dieser Website: 3elm GmbH,
          Geschäftsführer,Kay Schwarz. Eine Nutzung der Internetseiten der 3elm
          GmbH ist grundsätzlich ohne jede Angabe personenbezogener Daten
          möglich. Sofern eine betroffene Person besondere Services unseres
          Unternehmens über unsere Internetseite in Anspruch nehmen möchte,
          könnte jedoch eine Verarbeitung personenbezogener Daten erforderlich
          werden. Ist die Verarbeitung personenbezogener Daten erforderlich und
          besteht für eine solche Verarbeitung keine gesetzliche Grundlage,
          holen wir generell eine Einwilligung der betroffenen Person ein.
        </p>
        <p>
          <br />
        </p>
        <p>
          Die Verarbeitung personenbezogener Daten, beispielsweise des Namens,
          der Anschrift, E-Mail-Adresse oder Telefonnummer einer betroffenen
          Person, erfolgt stets im Einklang mit der Datenschutz-Grundverordnung
          und in Übereinstimmung mit den für die 3ELM GmbH geltenden
          landesspezifischen Datenschutzbestimmungen.
        </p>
        <p>
          Mittels dieser Datenschutzerklärung möchte unser Unternehmen die
          Öffentlichkeit über Art, Umfang und Zweck der von uns erhobenen,
          genutzten und verarbeiteten personenbezogenen Daten informieren.
          Ferner werden betroffene Personen mittels dieser Datenschutzerklärung
          über die ihnen zustehenden Rechte aufgeklärt.
        </p>
        <p>
          <br />
        </p>
        <p>
          Die 3ELM GmbH hat als für die Verarbeitung Verantwortlicher zahlreiche
          technische und organisatorische Maßnahmen umgesetzt, um einen
          möglichst lückenlosen Schutz der über diese Internetseite
          verarbeiteten personenbezogenen Daten sicherzustellen. Dennoch können
          internetbasierte Datenübertragungen grundsätzlich Sicherheitslücken
          aufweisen, sodass ein absoluter Schutz nicht gewährleistet werden
          kann. Aus diesem Grund steht es jeder betroffenen Person frei,
          personenbezogene Daten auch auf alternativen Wegen, beispielsweise
          telefonisch, an uns zu übermitteln.
        </p>
        <p>
          <br />
        </p>
        <ol className="list-inside list-decimal marker:text-fluid-l" id="l1">
          <li data-list-text="1.">
            <h2 className="inline text-fluid-l">Begriffsbestimmungen</h2>
            <p>
              <br />
            </p>
            <p>
              Die Datenschutzerklärung der 3ELM GmbH beruht auf den
              Begrifflichkeiten, die durch den Europäischen Richtlinien- und
              Verordnungsgeber beim Erlass der Datenschutz-Grundverordnung
              (DSGVO) verwendet wurden. Unsere Datenschutzerklärung soll sowohl
              für die Öffentlichkeit als auch für unsere Kunden und
              Geschäftspartner einfach lesbar und verständlich sein. Um dies zu
              gewährleisten, möchten wir vorab die verwendeten Begrifflichkeiten
              erläutern.
            </p>
            <p>
              <br />
            </p>
            <p>
              Wir verwenden in dieser Datenschutzerklärung unter anderem die
              folgenden Begriffe:
            </p>
            <p>
              <br />
            </p>
            <ol id="l2">
              <li
                className="before:text-fluid-m before:content-[attr(data-list-text)]"
                data-list-text="1) "
              >
                <h3 className="inline text-fluid-m">Personenbezogene Daten</h3>
                <p>
                  <br />
                </p>
                <p>
                  Personenbezogene Daten sind alle Informationen, die sich auf
                  eine identifizierte oder identifizierbare natürliche Person
                  (im Folgenden „betroffene Person&quot;) beziehen. Als
                  identifizierbar wird eine natürliche Person angesehen, die
                  direkt oder indirekt, insbesondere mittels Zuordnung zu einer
                  Kennung wie einem Namen, zu einer Kennnummer, zu
                  Standortdaten, zu einer Online-Kennung oder zu einem oder
                </p>
                <p>
                  mehreren besonderen Merkmalen, die Ausdruck der physischen,
                  physiologischen, genetischen, psychischen, wirtschaftlichen,
                  kulturellen oder sozialen Identität dieser natürlichen Person
                  sind, identifiziert werden kann.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li
                data-list-text="2) "
                className="before:text-fluid-m before:content-[attr(data-list-text)]"
              >
                <h3 className="inline text-fluid-m">Betroffene Person</h3>
                <p>
                  <br />
                </p>
                <p>
                  Betroffene Person ist jede identifizierte oder
                  identifizierbare natürliche Person, deren personenbezogene
                  Daten von dem für die Verarbeitung Verantwortlichen
                  verarbeitet werden.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li
                data-list-text="3) "
                className="before:text-fluid-m before:content-[attr(data-list-text)]"
              >
                <h3 className="inline text-fluid-m">Verarbeitung</h3>
                <p>
                  <br />
                </p>
                <p>
                  Verarbeitung ist jeder mit oder ohne Hilfe automatisierter
                  Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe
                  im Zusammenhang mit personenbezogenen Daten, wie das Erheben,
                  das Erfassen, die Organisation, das Ordnen, die Speicherung,
                  die Anpassung oder Veränderung, das Auslesen, das Abfragen,
                  die Verwendung, die Offenlegung durch Übermittlung,
                  Verbreitung oder eine andere Form der Bereitstellung, den
                  Abgleich oder die Verknüpfung, die Einschränkung, das Löschen
                  oder die Vernichtung.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li
                data-list-text="4) "
                className="before:text-fluid-m before:content-[attr(data-list-text)]"
              >
                <h3 className="inline text-fluid-m">
                  Einschränkung der Verarbeitung
                </h3>
                <p>
                  <br />
                </p>
                <p>
                  Einschränkung der Verarbeitung ist die Markierung
                  gespeicherter personenbezogener Daten mit dem Ziel, ihre
                  künftige Verarbeitung einzuschränken.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li
                data-list-text="5) "
                className="before:text-fluid-m before:content-[attr(data-list-text)]"
              >
                <h3 className="inline text-fluid-m">Profiling</h3>
                <p>
                  <br />
                </p>
                <p>
                  Profiling ist jede Art der automatisierten Verarbeitung
                  personenbezogener Daten, die darin besteht, dass diese
                  personenbezogenen Daten verwendet werden, um bestimmte
                  persönliche Aspekte, die sich auf eine natürliche Person
                  beziehen, zu bewerten, insbesondere, um Aspekte bezüglich
                  Arbeitsleistung, wirtschaftlicher Lage, Gesundheit,
                  persönlicher Vorlieben, Interessen, Zuverlässigkeit,
                  Verhalten, Aufenthaltsort oder Ortswechsel dieser natürlichen
                  Person zu analysieren oder vorherzusagen.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li
                data-list-text="6) "
                className="before:text-fluid-m before:content-[attr(data-list-text)]"
              >
                <h3 className="inline text-fluid-m">Pseudonymisierung</h3>
                <p>
                  <br />
                </p>
                <p>
                  Pseudonymisierung ist die Verarbeitung personenbezogener Daten
                  in einer Weise, auf welche die personenbezogenen Daten ohne
                  Hinzuziehung zusätzlicher Informationen nicht mehr einer
                  spezifischen betroffenen Person zugeordnet werden können,
                  sofern diese zusätzlichen Informationen gesondert aufbewahrt
                  werden und technischen und organisatorischen Maßnahmen
                  unterliegen, die gewährleisten, dass die personenbezogenen
                  Daten nicht einer identifizierten oder identifizierbaren
                  natürlichen Person zugewiesen werden.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li
                data-list-text="7) "
                className="before:text-fluid-m before:content-[attr(data-list-text)]"
              >
                <h3 className="inline text-fluid-m">
                  Verantwortlicher oder für die Verarbeitung Verantwortlicher
                </h3>
                <p>
                  <br />
                </p>
                <p>
                  Verantwortlicher oder für die Verarbeitung Verantwortlicher
                  ist die natürliche oder juristische Person, Behörde,
                  Einrichtung oder andere Stelle, die allein oder gemeinsam mit
                  anderen über die Zwecke und Mittel der Verarbeitung von
                  personenbezogenen Daten entscheidet. Sind die Zwecke und
                  Mittel dieser
                </p>
                <p>
                  Verarbeitung durch das Unionsrecht oder das Recht der
                  Mitgliedstaaten vorgegeben, so kann der Verantwortliche
                  beziehungsweise können die bestimmten Kriterien seiner
                  Benennung nach dem Unionsrecht oder dem Recht der
                  Mitgliedstaaten vorgesehen werden.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li
                data-list-text="8) "
                className="before:text-fluid-m before:content-[attr(data-list-text)]"
              >
                <h3 className="inline text-fluid-m">Auftragsverarbeiter</h3>
                <p>
                  <br />
                </p>
                <p>
                  Auftragsverarbeiter ist eine natürliche oder juristische
                  Person, Behörde, Einrichtung oder andere Stelle, die
                  personenbezogene Daten im Auftrag des Verantwortlichen
                  verarbeitet.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li
                data-list-text="9) "
                className="before:text-fluid-m before:content-[attr(data-list-text)]"
              >
                <h3 className="inline text-fluid-m">Empfänger</h3>
                <p>
                  <br />
                </p>
                <p>
                  Empfänger ist eine natürliche oder juristische Person,
                  Behörde, Einrichtung oder andere Stelle, der personenbezogene
                  Daten offengelegt werden, unabhängig davon, ob es sich bei ihr
                  um einen Dritten handelt oder nicht. Behörden, die im Rahmen
                  eines bestimmten Untersuchungsauftrags nach dem Unionsrecht
                  oder dem Recht der Mitgliedstaaten möglicherweise
                  personenbezogene Daten erhalten, gelten jedoch nicht als
                  Empfänger.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li
                data-list-text="10) "
                className="before:text-fluid-m before:content-[attr(data-list-text)]"
              >
                <h3 className="inline text-fluid-m">Dritter</h3>
                <p>
                  <br />
                </p>
                <p>
                  Dritter ist eine natürliche oder juristische Person, Behörde,
                  Einrichtung oder andere Stelle außer der betroffenen Person,
                  dem Verantwortlichen, dem Auftragsverarbeiter und den
                  Personen, die unter der unmittelbaren Verantwortung des
                  Verantwortlichen oder des Auftragsverarbeiters befugt sind,
                  die personenbezogenen Daten zu verarbeiten.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li
                data-list-text="11) "
                className="before:text-fluid-m before:content-[attr(data-list-text)]"
              >
                <h3 className="inline text-fluid-m">Einwilligung</h3>
              </li>
            </ol>
            <p>
              <br />
            </p>
            <p>
              Einwilligung ist jede von der betroffenen Person freiwillig für
              den bestimmten Fall in informierter Weise und unmissverständlich
              abgegebene Willensbekundung in Form einer Erklärung oder einer
              sonstigen eindeutigen bestätigenden Handlung, mit der die
              betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung
              der sie betreffenden personenbezogenen Daten einverstanden ist.
            </p>
            <p>
              <br />
            </p>
          </li>
          <li data-list-text="2.">
            <h2 className="inline text-fluid-l">
              Name und Anschrift des für die Verarbeitung Verantwortlichen
            </h2>
            <p>
              <br />
            </p>
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung,
              sonstiger in den Mitgliedstaaten der Europäischen Union geltenden
              Datenschutzgesetze und anderer Bestimmungen mit
              datenschutzrechtlichem Charakter, ist die:
            </p>
            <p>
              <br />
            </p>
            Herausgeber: 3ELM GmbH,{" "}
            <span class="p">
              Geschäftsführer: Kay Schwarz Anschrift: Curschmannstraße
              16,20251,HH,DE
            </span>
            <p>
              <a href="mailto:info@3elm.com" class="a" target="_blank">
                E-Mail: info@3elm.
              </a>
              <a href="http://www.3elm.com/" class="a" target="_blank">
                com Website:{" "}
              </a>
              <a href="http://www.3elm.com/" target="_blank">
                www.3elm.com
              </a>
            </p>
            <p>
              <br />
            </p>
          </li>
          <li data-list-text="3.">
            <h2 className="inline text-fluid-l">
              Name und Anschrift des Datenschutzbeauftragten
            </h2>
            <p>
              Der Datenschutzbeauftragte des für die Verarbeitung
              Verantwortlichen ist:
            </p>
            <p>
              <br />
            </p>
            <p>Datenschutzbeauftragter: 3elm GmbH</p>
            <p>
              <a href="mailto:info@3elm.com" class="a" target="_blank">
                Anschrift: Curschmannstrasse 16,20251, HH, DE E-Mail:{" "}
              </a>
              <a href="mailto:info@3elm.com" target="_blank">
                info@3elm.com
              </a>
            </p>
            <p>
              <br />
            </p>
            <p>
              Jede betroffene Person kann sich jederzeit bei allen Fragen und
              Anregungen zum Datenschutz direkt an unseren
              Datenschutzbeauftragten wenden.
            </p>
            <p>
              <br />
            </p>
          </li>
          <li data-list-text="4.">
            <h2 className="inline text-fluid-l">Cookies</h2>
            <p>
              <br />
            </p>
            <p>
              Die Internetseiten der 3ELM GmbH. verwenden Cookies. Cookies sind
              Textdateien, welche über einen Internetbrowser auf einem
              Computersystem abgelegt und gespeichert werden.
            </p>
            <p>
              <br />
            </p>
            <p>
              Zahlreiche Internetseiten und Server verwenden Cookies. Viele
              Cookies enthalten eine sogenannte Cookie-ID. Eine Cookie-ID ist
              eine eindeutige Kennung des Cookies. Sie besteht aus einer
              Zeichenfolge, durch welche Internetseiten und Server dem konkreten
              Internetbrowser zugeordnet werden können, in dem das Cookie
              gespeichert wurde. Dies ermöglicht es den besuchten Internetseiten
              und Servern, den individuellen Browser der betroffenen Person von
              anderen Internetbrowsern, die andere Cookies enthalten, zu
              unterscheiden. Ein bestimmter Internetbrowser kann über die
              eindeutige Cookie-ID wiedererkannt und identifiziert werden.
            </p>
            <p>
              <br />
            </p>
            <p>
              Durch den Einsatz von Cookies kann die 3ELM GmbH. den Nutzern
              dieser Internetseite nutzerfreundlichere Services bereitstellen,
              die ohne die Cookie-Setzung nicht möglich wären.
            </p>
            <p>
              <br />
            </p>
            <p>
              Mittels eines Cookies können die Informationen und Angebote auf
              unserer Internetseite im Sinne des Benutzers optimiert werden.
              Cookies ermöglichen uns, wie bereits erwähnt, die Benutzer unserer
              Internetseite wiederzuerkennen. Zweck dieser Wiedererkennung ist
              es, den Nutzern die Verwendung unserer Internetseite zu
              erleichtern. Der Benutzer einer Internetseite, die Cookies
              verwendet, muss beispielsweise nicht bei jedem Besuch der
              Internetseite erneut seine Zugangsdaten eingeben, weil dies von
              der Internetseite und dem auf dem Computersystem des Benutzers
              abgelegten Cookie übernommen wird. Ein weiteres Beispiel ist das
              Cookie eines Warenkorbes im Online-Shop. Der Online-Shop merkt
              sich die Artikel, die ein Kunde in den virtuellen Warenkorb gelegt
              hat, über ein Cookie.
            </p>
            <p>
              <br />
            </p>
            <p>
              Wir verwenden auf unserer Website darüber hinaus Cookies, die eine
              Analyse des Surfverhaltens der Nutzer ermöglichen.
            </p>
            <p>
              <br />
            </p>
            <p>
              Auf diese Weise können folgende Daten übermittelt werden:
              Häufigkeit von Seitenaufrufe
            </p>
            <p>
              Eingegebene Suchbegriffe Inanspruchnahme von Website-Funktionen
            </p>
            <p>
              Die auf diese Weise erhobenen Daten der Nutzer werden durch
              technische Vorkehrungen pseudonymisiert. Daher ist eine Zuordnung
              der Daten zum aufrufenden Nutzer nicht mehr möglich. Die Daten
              werden nicht gemeinsam mit sonstigen personenbezogenen Daten der
              Nutzer gespeichert.
            </p>
            <p>
              <br />
            </p>
            <p>
              Beim Aufruf unserer Website wird der Nutzer über die Verwendung
              von Cookies zu Analysezwecken informiert und seine Einwilligung
              zur Verarbeitung der in diesem Zusammenhang verwendeten
              personenbezogenen Daten eingeholt. In diesem Zusammenhang erfolgt
              auch ein Hinweis auf diese Datenschutzerklärung.
            </p>
            <p>
              <br />
            </p>
            <p>
              Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten
              unter Verwendung von Cookies zu Analysezwecken ist bei Vorliegen
              einer diesbezüglichen Einwilligung des Nutzers Art. 6 Abs. 1 lit.
              a DSGVO.
            </p>
            <p>
              <br />
            </p>
            <p>
              Die betroffene Person kann die Setzung von Cookies durch unsere
              Internetseite jederzeit mittels einer entsprechenden Einstellung
              des genutzten Internetbrowsers verhindern und damit der Setzung
              von Cookies dauerhaft widersprechen. Ferner können bereits
              gesetzte Cookies jederzeit über einen Internetbrowser oder andere
              Softwareprogramme gelöscht werden. Dies ist in allen gängigen
              Internetbrowsern möglich. Deaktiviert die betroffene Person die
              Setzung von Cookies in dem genutzten Internetbrowser, sind unter
              Umständen nicht alle Funktionen unserer Internetseite
              vollumfänglich nutzbar.
            </p>
            <p>
              <br />
            </p>
          </li>
          <li data-list-text="5.">
            <h2 className="inline text-fluid-l">
              Erfassung von allgemeinen Daten und Informationen
            </h2>
            <p>
              <br />
            </p>
            <p>
              Die Internetseite der 3ELM GmbH. erfasst mit jedem Aufruf der
              Internetseite durch eine betroffene Person oder ein
              automatisiertes System eine Reihe von allgemeinen Daten und
              Informationen. Diese allgemeinen Daten und Informationen werden in
              den Logfiles des Servers gespeichert. Erfasst werden können die
              (1) verwendeten Browsertypen und Versionen, (2) das vom
              zugreifenden System verwendete Betriebssystem, (3) die
              Internetseite, von welcher ein zugreifendes System auf unsere
              Internetseite gelangt (sogenannte Referrer), (4) die
              Unterwebseiten, welche über ein zugreifendes System auf unserer
              Internetseite angesteuert werden, (5) das Datum und die Uhrzeit
              eines Zugriffs auf die Internetseite, (6) eine
              Internet-Protokoll-Adresse (IP-Adresse), (7) der
              Internet-Service-Provider des zugreifenden Systems und (8)
              sonstige ähnliche Daten und Informationen, die der Gefahrenabwehr
              im Falle von Angriffen auf unsere informationstechnologischen
              Systeme dienen.
            </p>
            <p>
              <br />
            </p>
            <p>
              Bei der Nutzung dieser allgemeinen Daten und Informationen zieht
              die 3ELM GmbH keine Rückschlüsse auf die betroffene Person. Diese
              Informationen werden vielmehr benötigt, um (1) die Inhalte unserer
              Internetseite korrekt auszuliefern, (2) die Inhalte unserer
              Internetseite sowie die Werbung für diese zu optimieren, (3) die
              dauerhafte Funktionsfähigkeit unserer informationstechnologischen
              Systeme und der Technik unserer Internetseite zu gewährleisten
              sowie (4) um Strafverfolgungsbehörden im Falle eines
              Cyberangriffes die zur Strafverfolgung notwendigen Informationen
              bereitzustellen. Diese anonym erhobenen Daten und Informationen
              werden durch die 3ELM GmbH daher einerseits statistisch und ferner
              mit dem Ziel ausgewertet, den Datenschutz und die Datensicherheit
              in unserem Unternehmen zu erhöhen, um auch ein optimales
              Schutzniveau für die von uns verarbeiteten personenbezogenen Daten
            </p>
            <p>
              sicherzustellen. Die anonymen Daten der Server-Logfiles werden
              getrennt von allen durch eine betroffene Person angegebenen
              personenbezogenen Daten gespeichert.
            </p>
            <p>
              <br />
            </p>
            <p>
              Daneben werden auch, soweit die ausdrückliche Erlaubnis der
              betreffenden Nutzer und unter Einhaltung der geltenden
              Datenschutzbestimmungen vorliegt, folgende persönliche Daten
              erfasst:
            </p>
            <p>
              <br />
            </p>
            <p>IP-Adresse der Nutzer</p>
            <p>
              <br />
            </p>
            <p>E-Mail-Adresse der Nutzer</p>
            <p>
              <br />
            </p>
            <p>Angaben zum Wohnort (Postleitzahl usw.)</p>
            <p>
              <br />
            </p>
            <p>
              Die Verarbeitung der personenbezogenen Daten erfolgt aufgrund
              unseres berechtigten Interesses zur Erfüllung unserer vertraglich
              vereinbarten Leistungen und zur Optimierung unseres
              Online-Angebotes.
            </p>
            <p>
              <br />
            </p>
            <p>
              Diese Website können Sie auch besuchen, ohne Angaben zu Ihrer
              Person zu machen. Zur Verbesserung unseres Online-Angebotes
              speichern wir jedoch (ohne Personenbezug) Ihre Zugriffsdaten auf
              diese Website. Zu diesen Zugriffsdaten gehören z. B. die von Ihnen
              angeforderte Datei oder der Name Ihres Internet-Providers. Durch
              die Anonymisierung der Daten sind Rückschlüsse auf Ihre Person
              nicht möglich.
            </p>
            <p>
              <br />
            </p>
          </li>
          <li data-list-text="6.">
            <h2 className="inline text-fluid-l">SSL-Verschlüsselung</h2>
            <p>
              <br />
            </p>
            <p>
              Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen,
              verwenden wir dem aktuellen Stand der Technik entsprechende
              Verschlüsselungsverfahren (z. B. SSL) über HTTPS.
            </p>
            <p>
              <br />
            </p>
          </li>
          <li data-list-text="7.">
            <h2 className="inline text-fluid-l">
              Abonnement unseres Newsletters
            </h2>
            <p>
              <br />
            </p>
            <p>
              Auf der Internetseite der 3ELM GmbH, wird den Benutzern die
              Möglichkeit eingeräumt, den Newsletter unseres Unternehmens zu
              abonnieren. Welche personenbezogenen Daten bei der Bestellung des
              Newsletters an den für die Verarbeitung Verantwortlichen
              übermittelt werden, ergibt sich aus der hierzu verwendeten
              Eingabemaske.
            </p>
            <p>
              <br />
            </p>
            <p>
              Die 3ELM GmbH. informiert ihre Kunden und Geschäftspartner in
              regelmäßigen Abständen im Wege eines Newsletters über Angebote des
              Unternehmens. Der Newsletter unseres Unternehmens kann von der
              betroffenen Person grundsätzlich nur dann empfangen werden, wenn
              (1) die betroffene Person über eine gültige E-Mail-Adresse verfügt
              und (2) die betroffene Person sich für den Newsletterversand
              registriert. An die von einer betroffenen Person erstmalig für den
              Newsletterversand eingetragene E-Mail-Adresse wird aus rechtlichen
              Gründen eine Bestätigungsmail im Double-Opt-In-Verfahren
              versendet. Diese Bestätigungsmail dient der Überprüfung, ob der
              Inhaber der E-Mail-Adresse als betroffene Person den Empfang des
              Newsletters autorisiert hat.
            </p>
            <p>
              Bei der Anmeldung zum Newsletter speichern wir ferner die vom
              Internet-Service-Provider (ISP) vergebene IP-Adresse des von der
              betroffenen Person zum Zeitpunkt der Anmeldung verwendeten
              Computersystems sowie das Datum und die Uhrzeit der Anmeldung. Die
              Erhebung dieser Daten ist erforderlich, um den(möglichen)
              Missbrauch der E-Mail-Adresse einer betroffenen Person zu einem
              späteren Zeitpunkt nachvollziehen zu können und dient deshalb der
              rechtlichen Absicherung des für die Verarbeitung Verantwortlichen.
            </p>
            <p>
              <br />
            </p>
            <p>
              Die im Rahmen einer Anmeldung zum Newsletter erhobenen
              personenbezogenen Daten werden ausschließlich zum Versand unseres
              Newsletters verwendet. Ferner könnten Abonnenten des Newsletters
              per E-Mail informiert werden, sofern dies für den Betrieb des
              Newsletter-Dienstes oder eine diesbezügliche Registrierung
              erforderlich ist, wie dies im Falle von Änderungen am
              Newsletterangebot oder bei der Veränderung der technischen
              Gegebenheiten der Fall sein könnte. Es erfolgt keine Weitergabe
              der im Rahmen des Newsletter-Dienstes erhobenen personenbezogenen
              Daten an Dritte. Das Abonnement unseres Newsletters kann durch die
              betroffene Person jederzeit gekündigt werden. Die Einwilligung in
              die Speicherung personenbezogener Daten, die die betroffene Person
              uns für den Newsletterversand erteilt hat, kann jederzeit
              widerrufen werden. Zum Zwecke des Widerrufs der Einwilligung
              findet sich in jedem Newsletter ein entsprechender Link.
            </p>
            <p>
              Ferner besteht die Möglichkeit, sich jederzeit auch direkt auf der
              Internetseite des für die Verarbeitung Verantwortlichen vom
              Newsletterversand abzumelden oder dies dem für die Verarbeitung
              Verantwortlichen auf andere Weise mitzuteilen.
            </p>
            <p>
              <br />
            </p>
            <p>Teile unseres Newsletters können Werbematerial enthalten.</p>
            <p>
              <br />
            </p>
          </li>
          <li data-list-text="8.">
            <h2 className="inline text-fluid-l">Newsletter-Tracking</h2>
            <p>
              <br />
            </p>
            <p>
              Die Newsletter der 3ELM GmbH. enthalten sogenannte Zählpixel. Ein
              Zählpixel ist eine Miniaturgrafik, die in solche E-Mails
              eingebettet wird, welche im HTML-Format versendet werden, um eine
              Logdatei-Aufzeichnung und eine Logdatei-Analyse zu ermöglichen.
              Dadurch kann eine statistische Auswertung des Erfolges oder
              Misserfolges von Online-Marketing-Kampagnen durchgeführt werden.
              Anhand des eingebetteten Zählpixels kann die 3ELM GmbH erkennen,
              ob und wann eine E-Mail von einer betroffenen Person geöffnet
              wurde und welche in der E-Mail befindlichen Links von der
              betroffenen Person aufgerufen wurden.
            </p>
            <p>
              <br />
            </p>
            <p>
              Solche, über die in den Newslettern enthaltenen Zählpixel
              erhobenen personenbezogenen Daten, werden, von dem für die
              Verarbeitung Verantwortlichen, gespeichert und ausgewertet, um den
              Newsletterversand zu optimieren und den Inhalt zukünftiger
              Newsletter noch besser den Interessen der betroffenen Person
              anzupassen. Diese personenbezogenen Daten werden nicht an Dritte
              weitergegeben. Betroffene Personen sind jederzeit berechtigt, die
              diesbezügliche gesonderte, über das Double-Opt-In-Verfahren
              abgegebene Einwilligungserklärung zu widerrufen. Nach einem
              Widerruf werden diese personenbezogenen Daten von dem für die
              Verarbeitung Verantwortlichen gelöscht. Eine Abmeldung vom Erhalt
              des Newsletters deutet die 3ELM GmbH automatisch als Widerruf.
            </p>
          </li>
          <li data-list-text="9.">
            <h2 className="inline text-fluid-l">
              Kontaktmöglichkeit über die Internetseite
            </h2>
            <p>
              <br />
            </p>
            <p>
              Die Internetseite der 3ELM GmbH. enthält aufgrund von gesetzlichen
              Vorschriften Angaben, die eine schnelle elektronische
              Kontaktaufnahme zu unserem Unternehmen sowie eine unmittelbare
              Kommunikation mit uns ermöglichen, was ebenfalls eine allgemeine
              Adresse der sogenannten elektronischen Post (E-Mail-Adresse)
              umfasst. Sofern eine betroffene Person per E-Mail oder über ein
              Kontaktformular den Kontakt mit dem für die Verarbeitung
              Verantwortlichen aufnimmt, werden die von der betroffenen Person
              übermittelten personenbezogenen Daten automatisch gespeichert.
              Solche auf freiwilliger Basis von einer betroffenen Person an den
              für die Verarbeitung Verantwortlichen übermittelten
              personenbezogenen Daten werden für Zwecke der Bearbeitung oder der
              Kontaktaufnahme zur betroffenen Person gespeichert. Es erfolgt
              keine Weitergabe dieser personenbezogenen Daten an Dritte.
            </p>
            <p>
              <br />
            </p>
          </li>
          <li data-list-text="10.">
            <h2 className="inline text-fluid-l">
              Kommentarfunktion im Blog auf der Internetseite
            </h2>
            <p>
              <br />
            </p>
            <p>
              Die3ELM GmbH. bietet den Nutzern auf einem Blog, der sich auf der
              Internetseite des für die Verarbeitung Verantwortlichen befindet,
              die Möglichkeit, individuelle Kommentare zu einzelnen
              Blog-Beiträgen zu hinterlassen. Ein Blog ist ein auf einer
              Internetseite geführtes, in der Regel öffentlich einsehbares
              Portal, in welchem eine oder mehrere Personen, die Blogger oder
              Web-Blogger genannt werden, Artikel posten oder Gedanken in
              sogenannten Blogposts niederschreiben können. Die Blogposts können
              in der Regel von Dritten kommentiert werden.
            </p>
            <p>
              <br />
            </p>
            <p>
              Hinterlässt eine betroffene Person einen Kommentar in dem auf
              dieser Internetseite veröffentlichten Blog, werden neben den von
              der betroffenen Person hinterlassenen Kommentaren auch Angaben zum
              Zeitpunkt der Kommentareingabe sowie zu dem von der betroffenen
              Person gewählten Nutzernamen (Pseudonym) gespeichert und
              veröffentlicht. Ferner wird die vom Internet-Service-Provider
              (ISP) der betroffenen Person vergebene IP-Adresse
              mitprotokolliert. Diese Speicherung der IP-Adresse erfolgt aus
              Sicherheitsgründen und für den Fall, dass die betroffene Person
              durch einen abgegebenen Kommentar die Rechte Dritter verletzt oder
              rechtswidrige Inhalte postet. Die Speicherung dieser
              personenbezogenen Daten erfolgt daher im eigenen Interesse des für
              die Verarbeitung Verantwortlichen, damit sich dieser im Falle
              einer Rechtsverletzung gegebenenfalls exkulpieren könnte. Es
              erfolgt keine Weitergabe dieser erhobenen personenbezogenen Daten
              an Dritte, sofern eine solche Weitergabe nicht gesetzlich
              vorgeschrieben ist oder der Rechtsverteidigung des für die
              Verarbeitung Verantwortlichen dient.
            </p>
            <p>
              <br />
            </p>
          </li>
          <li data-list-text="11.">
            <h2 className="inline text-fluid-l">
              Abonnement von Kommentaren im Blog auf der Internetseite
            </h2>
            <p>
              <br />
            </p>
            <p>
              Die im Blog der 3ELM GmbH. abgegebenen Kommentare können
              grundsätzlich von Dritten abonniert werden. Insbesondere besteht
              die Möglichkeit, dass ein Kommentator die seinem Kommentar
              nachfolgenden Kommentare zu einem bestimmten Blog-Beitrag
              abonniert.
            </p>
            <p>
              Sofern sich eine betroffene Person für die Option entscheidet,
              Kommentare zu abonnieren, versendet der für die Verarbeitung
              Verantwortliche eine automatische Bestätigungsmail, um im
              Double-Opt-In-Verfahren zu überprüfen, ob sich wirklich der
              Inhaber der angegebenen E-Mail-Adresse für diese Option
              entschieden hat. Die Option zum Abonnement von Kommentaren kann
              jederzeit beendet werden.
            </p>
            <p>
              <br />
            </p>
          </li>
          <li data-list-text="12.">
            <h2 className="inline text-fluid-l">
              Routinemäßige Löschung und Sperrung von personenbezogenen Daten
            </h2>
            <p>
              <br />
            </p>
            <p>
              Der für die Verarbeitung Verantwortliche verarbeitet und speichert
              personenbezogene Daten der betroffenen Person nur für den
              Zeitraum, der zur Erreichung des Speicherungszwecks erforderlich
              ist oder sofern dies durch den europäischen Richtlinien- und
              Verordnungsgeber oder einen anderen Gesetzgeber in Gesetzen oder
              Vorschriften, welchen der für die Verarbeitung Verantwortliche
              unterliegt, vorgesehen wurde.
            </p>
            <p>
              <br />
            </p>
            <p>
              Entfällt der Speicherungszweck oder läuft eine vom europäischen
              Richtlinien- und Verordnungsgeber oder einem anderen zuständigen
              Gesetzgeber vorgeschriebene Speicherfrist ab, werden die
              personenbezogenen Daten routinemäßig und entsprechend den
              gesetzlichen Vorschriften gesperrt oder gelöscht.
            </p>
            <p>
              <br />
            </p>
          </li>
          <li data-list-text="13.">
            <h2 className="inline text-fluid-l">
              Rechte der betroffenen Person
            </h2>
            <p>
              <br />
            </p>
            <ol id="l3">
              <li
                data-list-text="1) "
                className="before:text-fluid-m before:content-[attr(data-list-text)]"
              >
                <h3 className="inline text-fluid-m">Recht auf Bestätigung</h3>
                <p>
                  <br />
                </p>
                <p>
                  Jede betroffene Person hat das vom europäischen Richtlinien-
                  und Verordnungsgeber eingeräumte Recht, von dem für die
                  Verarbeitung Verantwortlichen eine Bestätigung darüber zu
                  verlangen, ob sie betreffende personenbezogene Daten
                  verarbeitet werden. Möchte eine betroffene Person dieses
                  Bestätigungsrecht in Anspruch nehmen, kann sie sich hierzu
                  jederzeit an einen Mitarbeiter des für die Verarbeitung
                  Verantwortlichen wenden.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li
                data-list-text="2) "
                className="before:text-fluid-m before:content-[attr(data-list-text)]"
              >
                <h3 className="inline text-fluid-m">Recht auf Auskunft</h3>
                <p>
                  <br />
                </p>
                <p>
                  Jede von der Verarbeitung personenbezogener Daten betroffene
                  Person hat das vom europäischen Richtlinien- und
                  Verordnungsgeber gewährte Recht, jederzeit von dem für die
                  Verarbeitung Verantwortlichen unentgeltliche Auskunft über die
                  zu seiner Person gespeicherten personenbezogenen Daten und
                  eine Kopie dieser Auskunft zu erhalten. Ferner hat der
                  Europäische Richtlinien- und Verordnungsgeber der betroffenen
                  Person Auskunft über folgende Informationen zugestanden:
                </p>
                <ul className="list-inside list-disc marker:text-base" id="l4">
                  <li data-list-text="">die Verarbeitungszwecke</li>
                  <li data-list-text="">
                    die Kategorien personenbezogener Daten, die verarbeitet
                    werden
                  </li>
                  <li data-list-text="">
                    die Empfänger oder Kategorien von Empfängern, gegenüber
                    denen die personenbezogenen Daten offengelegt worden sind
                    oder noch offengelegt werden, insbesondere bei Empfängern in
                    Drittländern oder bei internationalen Organisationen
                  </li>
                  <li data-list-text="">
                    Falls möglich die geplante Dauer, für die die
                    personenbezogenen Daten gespeichert werden, oder, falls dies
                    nicht möglich ist, die Kriterien für die Festlegung dieser
                    Dauer
                  </li>
                  <li data-list-text="">
                    das Bestehen eines Rechts auf Berichtigung oder Löschung der
                    sie betreffenden personenbezogenen Daten oder auf
                    Einschränkung der Verarbeitung durch den Verantwortlichen
                    oder eines Widerspruchsrechts gegen diese Verarbeitung
                  </li>
                  <li data-list-text="">
                    das Bestehen eines Beschwerderechts bei einer
                    Aufsichtsbehörde
                  </li>
                  <li data-list-text="">
                    wenn die personenbezogenen Daten nicht bei der betroffenen
                    Person erhoben werden: Alle verfügbaren Informationen über
                    die Herkunft der Daten
                  </li>
                  <li data-list-text="">
                    das Bestehen einer automatisierten Entscheidungsfindung
                    einschließlich Profiling gemäß Artikel 22 Abs.1 und 4 DSGVO
                    und — zumindest in diesen Fällen — aussagekräftige
                    Informationen über die involvierte Logik sowie die Tragweite
                    und die angestrebten Auswirkungen einer derartigen
                    Verarbeitung für die betroffene Person
                    <br />
                    Ferner steht der betroffenen Person ein Auskunftsrecht
                    darüber zu, ob personenbezogene Daten an ein Drittland oder
                    an eine internationale Organisation übermittelt wurden.
                    Sofern dies der Fall ist, so steht der betroffenen Person im
                    Übrigen das Recht zu, Auskunft über die geeigneten Garantien
                    im Zusammenhang mit der Übermittlung zu erhalten. Möchte
                    eine betroffene Person dieses Auskunftsrecht in Anspruch
                    nehmen, kann sie sich hierzu jederzeit an einen Mitarbeiter
                    des für die Verarbeitung Verantwortlichen wenden.
                    <p>
                      <br />
                    </p>
                  </li>
                </ul>
              </li>
              <li
                data-list-text="3) "
                className="before:text-fluid-m before:content-[attr(data-list-text)]"
              >
                <h3 className="inline text-fluid-m">Recht auf Berichtigung</h3>
                <p>
                  <br />
                </p>
                <p>
                  Jede von der Verarbeitung personenbezogener Daten betroffene
                  Person hat das vom europäischen Richtlinien- und
                  Verordnungsgeber gewährte Recht, die unverzügliche
                  Berichtigung sie betreffender unrichtiger personenbezogener
                  Daten zu verlangen. Ferner steht der betroffenen Person das
                  Recht zu, unter Berücksichtigung der Zwecke der Verarbeitung,
                  die Vervollständigung unvollständiger personenbezogener Daten
                  — auch mittels einer ergänzenden Erklärung — zu verlangen.
                  Möchte eine betroffene Person dieses Berichtigungsrecht in
                  Anspruch nehmen, kann sie sich hierzu jederzeit an einen
                  Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li
                data-list-text="4) "
                className="before:text-fluid-m before:content-[attr(data-list-text)]"
              >
                <h3 className="inline text-fluid-m">
                  Recht auf Löschung (Recht auf Vergessen werden)
                </h3>
                <p>
                  <br />
                </p>
                <p>
                  Jede von der Verarbeitung personenbezogener Daten betroffene
                  Person hat das vom europäischen Richtlinien- und
                  Verordnungsgeber gewährte Recht, von dem Verantwortlichen zu
                  verlangen, dass die sie betreffenden personenbezogenen Daten
                  unverzüglich gelöscht werden, sofern einer der folgenden
                  Gründe zutrifft und soweit die Verarbeitung nicht erforderlich
                  ist:
                </p>
                <ul className="list-inside list-disc marker:text-base" id="l5">
                  <li data-list-text="">
                    Die personenbezogenen Daten wurden für solche Zwecke erhoben
                    oder auf sonstige Weise verarbeitet, für welche sie nicht
                    mehr notwendig sind.
                  </li>
                  <li data-list-text="">
                    Die betroffene Person widerruft ihre Einwilligung, auf die
                    sich die Verarbeitung gemäß Art. 6 Abs. 1 Buchstabe a DSGVO
                    oder Art. 9 Abs. 2 Buchstabe a DSGVO stützte, und es fehlt
                    an einer anderweitigen Rechtsgrundlage für die Verarbeitung.
                  </li>
                  <li data-list-text="">
                    Die betroffene Person legt gemäß Art. 21 Abs. 1 DSGVO
                    Widerspruch gegen die Verarbeitung ein, und es liegen keine
                    vorrangigen berechtigten Gründe für die Verarbeitung vor,
                    oder die betroffene Person legt gemäß Art. 21 Abs. 2 DSGVO
                    Widerspruch gegen die Verarbeitung ein.
                  </li>
                  <li data-list-text="">
                    Die personenbezogenen Daten wurden unrechtmäßig verarbeitet.
                  </li>
                  <li data-list-text="">
                    Die Löschung der personenbezogenen Daten ist zur Erfüllung
                    einer rechtlichen Verpflichtung nach dem Unionsrecht oder
                    dem Recht der Mitgliedstaaten erforderlich, dem der
                    Verantwortliche unterliegt.
                  </li>
                  <li data-list-text="">
                    Die personenbezogenen Daten wurden in Bezug auf angebotene
                    Dienste der Informationsgesellschaft gemäß Art. 8 Abs. 1
                    DSGVO erhoben.
                    <br />
                    Sofern einer der oben genannten Gründe zutrifft und eine
                    betroffene Person die Löschung von personenbezogenen Daten,
                    die bei der 3ELM GmbH gespeichert sind, veranlassen möchte,
                    kann sie sich hierzu jederzeit an einen Mitarbeiter des für
                    die Verarbeitung Verantwortlichen wenden. Der Mitarbeiter
                    der 3ELM GmbH wird veranlassen, dass dem Löschverlangen
                    unverzüglich nachgekommen wird.Wurden die personenbezogenen
                    Daten von der 3ELM GmbH öffentlich gemacht und ist unser
                    Unternehmen als Verantwortlicher gemäß Art. 17 Abs. 1 DSGVO
                    zur Löschung der personenbezogenen Daten verpflichtet, so
                    trifft die 3ELM GmbH. unter Berücksichtigung der verfügbaren
                    Technologie und der Implementierungskosten angemessene
                    Maßnahmen, auch technischer Art, um andere für die
                    Datenverarbeitung Verantwortliche, welche die
                    veröffentlichten personenbezogenen Daten verarbeiten,
                    darüber in Kenntnis zu setzen, dass die betroffene Person
                    von diesen anderen für die Datenverarbeitung
                    Verantwortlichen die Löschung sämtlicher Links zu diesen
                    personenbezogenen Daten oder von Kopien oder Replikationen
                    dieser personenbezogenen Daten verlangt hat, soweit die
                    Verarbeitung nicht erforderlich ist. Der Mitarbeiter der
                    3ELM GmbH. wird im Einzelfall das Notwendige veranlassen.
                    <p>
                      <br />
                    </p>
                  </li>
                </ul>
              </li>
              <li
                data-list-text="5) "
                className="before:text-fluid-m before:content-[attr(data-list-text)]"
              >
                <h3 className="inline text-fluid-m">
                  Recht auf Einschränkung der Verarbeitung
                </h3>
                <p>
                  <br />
                </p>
                <p>
                  Jede von der Verarbeitung personenbezogener Daten betroffene
                  Person hat das vom europäischen Richtlinien- und
                  Verordnungsgeber gewährte Recht, von dem Verantwortlichen die
                  Einschränkung der Verarbeitung zu verlangen, wenn eine der
                  folgenden Voraussetzungen gegeben ist:
                </p>
                <p>
                  <br />
                </p>
                <p>
                  Die Richtigkeit der personenbezogenen Daten wird von der
                  betroffenen Person bestritten, und zwar für eine Dauer, die es
                  dem Verantwortlichen ermöglicht, die Richtigkeit der
                  personenbezogenen Daten zu überprüfen.
                </p>
                <p>
                  <br />
                </p>
                <p>
                  Die Verarbeitung ist unrechtmäßig, die betroffene Person lehnt
                  die Löschung der personenbezogenen Daten ab und verlangt
                  stattdessen die Einschränkung der Nutzung der
                  personenbezogenen Daten.
                </p>
                <p>
                  <br />
                </p>
                <p>
                  Der Verantwortliche benötigt die personenbezogenen Daten für
                  die Zwecke der Verarbeitung nicht länger, die betroffene
                  Person benötigt sie jedoch zur Geltendmachung, Ausübung oder
                  Verteidigung von Rechtsansprüchen.
                </p>
                <p>
                  <br />
                </p>
                <p>
                  Die betroffene Person hat Widerspruch gegen die Verarbeitung
                  gem. Art. 21 Abs. 1 DSGVO eingelegt und es steht noch nicht
                  fest, ob die berechtigten Gründe des Verantwortlichen
                  gegenüber denen der betroffenen Person überwiegen.
                </p>
                <p>
                  Sofern eine der oben genannten Voraussetzungen gegeben ist und
                  eine betroffene Person die Einschränkung von personenbezogenen
                  Daten, die bei der 3ELM GmbH.gespeichert sind, verlangen
                  möchte, kann sie sich hierzu jederzeit an einen Mitarbeiter
                  des für die Verarbeitung Verantwortlichen wenden. Der
                  Mitarbeiter der 3ELM GmbH. wird die Einschränkung der
                  Verarbeitung veranlassen.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li
                data-list-text="6) "
                className="before:text-fluid-m before:content-[attr(data-list-text)]"
              >
                <h3 className="inline text-fluid-m">
                  Recht auf Datenübertragbarkeit
                </h3>
                <p>
                  <br />
                </p>
                <p>
                  Jede von der Verarbeitung personenbezogener Daten betroffene
                  Person hat das vom europäischen Richtlinien- und
                  Verordnungsgeber gewährte Recht, die sie betreffenden
                  personenbezogenen Daten, welche durch die betroffene Person
                  einem Verantwortlichen bereitgestellt wurden, in einem
                  strukturierten, gängigen und maschinenlesbaren Format zu
                  erhalten. Sie hat außerdem das Recht, diese Daten einem
                  anderen Verantwortlichen ohne Behinderung durch den
                  Verantwortlichen, dem die personenbezogenen Daten
                  bereitgestellt wurden, zu übermitteln, sofern die Verarbeitung
                  auf der Einwilligung gemäß Art. 6 Abs. 1 Buchstabe a DSGVO
                  oder Art. 9 Abs. 2 Buchstabe a DSGVO oder auf einem Vertrag
                  gemäß Art. 6 Abs. 1 Buchstabe b DSGVO beruht und die
                  Verarbeitung mithilfe automatisierter Verfahren erfolgt,
                  sofern die Verarbeitung nicht für die Wahrnehmung einer
                  Aufgabe erforderlich ist, die im öffentlichen Interesse liegt
                  oder in Ausübung öffentlicher Gewalt erfolgt, welche dem
                  Verantwortlichen übertragen wurde. Ferner hat die betroffene
                  Person bei der Ausübung ihres Rechts auf Datenübertragbarkeit
                  gemäß Art. 20 Abs. 1 DSGVO das Recht, zu erwirken, dass die
                  personenbezogenen Daten direkt von einem Verantwortlichen an
                  einen anderen Verantwortlichen übermittelt werden, soweit dies
                  technisch machbar ist und sofern hiervon nicht die Rechte und
                  Freiheiten anderer Personen beeinträchtigt werden. Zur
                  Geltendmachung des Rechts auf Datenübertragbarkeit kann sich
                  die betroffene Person jederzeit an einen Mitarbeiter der 3ELM
                  GmbH wenden.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li
                data-list-text="7) "
                className="before:text-fluid-m before:content-[attr(data-list-text)]"
              >
                <h3 className="inline text-fluid-m">Recht auf Widerspruch</h3>
                <p>
                  <br />
                </p>
                <p>
                  Jede von der Verarbeitung personenbezogener Daten betroffene
                  Person hat das vom europäischen Richtlinien- und
                  Verordnungsgeber gewährte Recht, aus Gründen, die sich aus
                  ihrer besonderen Situation ergeben, jederzeit gegen die
                  Verarbeitung sie betreffender personenbezogener Daten, die
                  aufgrund von Art. 6 Abs. 1 Buchstaben e oder f DSGVO erfolgt,
                  Widerspruch einzulegen. Dies gilt auch für ein auf diese
                  Bestimmungen gestütztes Profiling. Die 3ELM GmbH. verarbeitet
                  die personenbezogenen Daten im Falle des Widerspruchs nicht
                  mehr, es sei denn, wir können zwingende schutzwürdige Gründe
                  für die Verarbeitung nachweisen, die den Interessen, Rechten
                  und Freiheiten der betroffenen Person überwiegen, oder die
                  Verarbeitung dient der Geltendmachung, Ausübung oder
                  Verteidigung von Rechtsansprüchen. Verarbeitet die 3ELM GmbH
                  personenbezogene Daten, um Direktwerbung zu betreiben, so hat
                  die betroffene Person das Recht, jederzeit Widerspruch gegen
                  die Verarbeitung der personenbezogenen Daten zum Zwecke
                  derartiger Werbung einzulegen. Dies gilt auch für das
                  Profiling, soweit es mit solcher Direktwerbung in Verbindung
                  steht. Widerspricht die betroffene Person gegenüber der 3ELM
                  GmbH der Verarbeitung für Zwecke der Direktwerbung, so wird
                  die 3ELM GmbH die personenbezogenen Daten nicht mehr für diese
                  Zwecke verarbeiten.
                </p>
                <p>
                  Zudem hat die betroffene Person das Recht, aus Gründen, die
                  sich aus ihrer besonderen Situation ergeben, gegen die sie
                  betreffende Verarbeitung
                </p>
                <p>
                  personenbezogener Daten, die bei der 3ELM GmbH. zu
                  wissenschaftlichen oder historischen Forschungszwecken oder zu
                  statistischen Zwecken gemäß Art. 89 Abs. 1 DSGVO erfolgen,
                  Widerspruch einzulegen, es sei denn, eine solche Verarbeitung
                  ist zur Erfüllung einer im öffentlichen Interesse liegenden
                  Aufgabe erforderlich. Zur Ausübung des Rechts auf Widerspruch
                  kann sich die betroffene Person direkt jeden Mitarbeiter der
                  3ELM GmbH. oder einen anderen Mitarbeiter wenden. Der
                  betroffenen Person steht es ferner frei, im Zusammenhang mit
                  der Nutzung von Diensten der Informationsgesellschaft,
                  ungeachtet der Richtlinie 2002/58/EG, ihr Widerspruchsrecht
                  mittels automatisierter Verfahren auszuüben, bei denen
                  technische Spezifikationen verwendet werden.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li
                data-list-text="8) "
                className="before:text-fluid-m before:content-[attr(data-list-text)]"
              >
                <h3 className="inline text-fluid-m">
                  Automatisierte Entscheidungen im Einzelfall, einschließlich
                  Profiling
                </h3>
                <p>
                  <br />
                </p>
                <p>
                  Jede von der Verarbeitung personenbezogener Daten betroffene
                  Person hat das vom europäischen Richtlinien- und
                  Verordnungsgeber gewährte Recht, nicht einer ausschließlich
                  auf einer automatisierten Verarbeitung — einschließlich
                  Profiling — beruhenden Entscheidung unterworfen zu werden, die
                  ihr gegenüber rechtliche Wirkung entfaltet oder sie in
                  ähnlicher Weise erheblich beeinträchtigt, sofern die
                  Entscheidung (1) nicht für den Abschluss oder die Erfüllung
                  eines Vertrags zwischen der betroffenen Person und dem
                  Verantwortlichen erforderlich ist, oder (2) aufgrund von
                  Rechtsvorschriften der Union oder der Mitgliedstaaten, denen
                  der Verantwortliche unterliegt, zulässig ist und diese
                  Rechtsvorschriften angemessene Maßnahmen zur Wahrung der
                  Rechte und Freiheiten sowie der berechtigten Interessen der
                  betroffenen Person enthalten oder (3) mit ausdrücklicher
                  Einwilligung der betroffenen Person erfolgt. Ist die
                  Entscheidung (1) für den Abschluss oder die Erfüllung eines
                  Vertrags zwischen der betroffenen Person und dem
                  Verantwortlichen erforderlich oder (2) erfolgt sie mit
                  ausdrücklicher Einwilligung der betroffenen Person, trifft die
                  3ELM GmbH angemessene Maßnahmen, um die Rechte und Freiheiten
                  sowie die berechtigten Interessen der betroffenen Person zu
                  wahren, wozu mindestens das Recht auf Erwirkung des
                  Eingreifens einer Person seitens des Verantwortlichen, auf
                  Darlegung des eigenen Standpunkts und auf Anfechtung der
                  Entscheidung gehört. Möchte die betroffene Person Rechte mit
                  Bezug auf automatisierte Entscheidungen geltend machen, kann
                  sie sich hierzu jederzeit an einen Mitarbeiter des für die
                  Verarbeitung Verantwortlichen wenden.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li
                data-list-text="9) "
                className="before:text-fluid-m before:content-[attr(data-list-text)]"
              >
                <h3 className="inline text-fluid-m">
                  Recht auf Widerruf einer datenschutzrechtlichen Einwilligung
                </h3>
              </li>
            </ol>
            <p>
              <br />
            </p>
            <p>
              Jede von der Verarbeitung personenbezogener Daten betroffene
              Person hat das vom europäischen Richtlinien- und Verordnungsgeber
              gewährte Recht, eine Einwilligung zur Verarbeitung
              personenbezogener Daten jederzeit zu widerrufen. Möchte die
              betroffene Person ihr Recht auf Widerruf einer Einwilligung
              geltend machen, kann sie sich hierzu jederzeit an einen
              Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.
            </p>
            <p>
              <br />
            </p>
          </li>
          <li data-list-text="14.">
            <h2 className="inline text-fluid-l">
              Datenschutz bei Bewerbungen und im Bewerbungsverfahren
            </h2>
            <p>
              <br />
            </p>
            <p>
              Der für die Verarbeitung Verantwortliche erhebt und verarbeitet
              die personenbezogenen Daten von Bewerbern zum Zwecke der
              Abwicklung des Bewerbungsverfahrens. Die Verarbeitung kann auch
              auf elektronischem Wege
            </p>
            <p>
              erfolgen. Dies ist insbesondere dann der Fall, wenn ein Bewerber
              entsprechende Bewerbungsunterlagen auf dem elektronischen Wege,
              beispielsweise per E-Mail oder über ein auf der Internetseite
              befindliches Webformular, an den für die Verarbeitung
              Verantwortlichen übermittelt. Schließt der für die Verarbeitung
              Verantwortliche einen Anstellungsvertrag mit einem Bewerber,
              werden die übermittelten Daten zum Zwecke der Abwicklung des
              Beschäftigungsverhältnisses unter Beachtung der gesetzlichen
              Vorschriften gespeichert. Wird von dem für die Verarbeitung
              Verantwortlichen kein Anstellungsvertrag mit dem Bewerber
              geschlossen, so werden die Bewerbungsunterlagen zwei Monate nach
              Bekanntgabe der Absageentscheidung automatisch gelöscht, sofern
              einer Löschung keine sonstigen berechtigten Interessen des für die
              Verarbeitung Verantwortlichen entgegenstehen. Sonstiges
              berechtigtes Interesse in diesem Sinne ist beispielsweise eine
              Beweispflicht in einem Verfahren nach dem Allgemeinen
              Gleichbehandlungsgesetz (AGG).
            </p>
            <p>
              <br />
            </p>
          </li>
          <li data-list-text="15.">
            <h2 className="inline text-fluid-l">
              Verwendung von Google Analytics
            </h2>
            <p>
              <br />
            </p>
            <p>
              Diese Website benutzt Google Analytics, einen Webanalysedienst der
              Google Inc. (folgend: Google). Google Analytics verwendet sog.
              „Cookies&quot;, also Textdateien, die auf Ihrem Computer
              gespeichert werden und die eine Analyse der Benutzung der Website
              durch Sie ermöglichen. Die durch das Cookie erzeugten
              Informationen über Ihre Benutzung dieser Website werden in der
              Regel an einen Server von Google in den USA übertragen und dort
              gespeichert. Aufgrund der Aktivierung der IP-Anonymisierung auf
              diesen Webseiten, wird Ihre IP-Adresse von Google jedoch innerhalb
              von Mitgliedstaaten der Europäischen Union oder in anderen
              Vertragsstaaten des Abkommens über den Europäischen
              Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die
              volle IP-Adresse an einen Server von Google in den USA übertragen
              und dort gekürzt. Im Auftrag des Betreibers dieser Website wird
              Google diese Informationen benutzen, um Ihre Nutzung der Website
              auszuwerten, um Reports über die Webseitenaktivitäten
              zusammenzustellen und um weitere mit der Websitenutzung und der
              Internetnutzung verbundene Dienstleistungen gegenüber dem
              Webseitenbetreiber zu erbringen. Die im Rahmen von Google
              Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit
              anderen Daten von Google zusammengeführt.
            </p>
            <p>
              <br />
            </p>
            <p>
              Die Zwecke der Datenverarbeitung liegen in der Auswertung der
              Nutzung der Website und in der Zusammenstellung von Reports über
              Aktivitäten auf der Website. Auf Grundlage der Nutzung der Website
              und des Internets sollen dann weitere verbundene Dienstleistungen
              erbracht werden. Die Verarbeitung beruht auf dem berechtigten
              Interesse des Webseitenbetreibers.
            </p>
            <p>
              <br />
            </p>
            <p>
              Sie können die Speicherung der Cookies durch eine entsprechende
              Einstellung Ihrer Browser-Software verhindern; wir weisen Sie
              jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht
              sämtliche Funktionen dieser Website vollumfänglich werden nutzen
              können. Sie können darüber hinaus die Erfassung, der durch das
              Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten
              (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser
              Daten durch Google verhindern, indem sie das unter dem folgenden
              Link verfügbare Browser-Plugin herunterladen und installieren:
              Browser Add On zur Deaktivierung von Google Analytics.
            </p>
            <p>
              Zusätzlich oder als Alternative zum Browser-Add-On können Sie das
              Tracking durch Google Analytics auf unseren Seiten unterbinden,
              indem Sie diesen Link anklicken. Dabei wird ein Opt-Out-Cookie auf
              Ihrem Gerät installiert. Damit wird die Erfassung durch Google
              Analytics für diese Website und für diesen Browser zukünftig
              verhindert, so lange das Cookie in Ihrem Browser installiert
              bleibt.
            </p>
            <p>
              <br />
            </p>
          </li>
          <li data-list-text="16.">
            <h2 className="inline text-fluid-l">
              Verwendung von Adobe Analytics
            </h2>
            <p>
              <br />
            </p>
            <p>
              Diese Website benutzt Adobe Analytics, einen Webanalysedienst der
              Adobe Systems Software Ireland Limited („Adobe&quot;). Adobe
              Analytics verwendet sog. Cookies, also Textdateien, die auf Ihrem
              Computer gespeichert werden und die eine Analyse der Benutzung der
              Website durch Sie ermöglichen. Wird ein Tracking Datensatz von
              einem Browser eines Webseitenbesuchers an die Adobe Datacenter
              übermittelt, dann wird durch die von uns vorgenommene
              Servereinstellung gewährleistet, dass vor der Geolokalisierung die
              IP-Adresse anonymisiert wird, d.h. dass das letzte Oktett der IP
              Adresse durch Nullen ersetzt wird. Vor Speicherung des
              Tracking-Pakets wird die IP Adresse durch einzelne generische IP
              Adressen ersetzt.
            </p>
            <p>
              <br />
            </p>
            <p>
              Im Auftrag des Betreibers dieser Website wird Adobe diese
              Informationen benutzen, um die Nutzung der Website durch die
              Nutzer auszuwerten, um Reports über die Websiteaktivitäten
              zusammenzustellen und um weitere mit der Websitenutzung und der
              Internetnutzung verbundene Dienstleistungen gegenüber dem
              Websitebetreiber zu erbringen. Die im Rahmen von Adobe Analytics
              von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen
              Daten von Adobe zusammengeführt.
            </p>
            <p>
              <br />
            </p>
            <p>
              <a
                href="http://www.adobe.com/de/privacy/"
                class="a"
                target="_blank"
              >
                Sie können die Speicherung der Cookies durch eine entsprechende
                Einstellung Ihrer Browser-Software verhindern. Dieses Angebot
                weist die Nutzer jedoch darauf hin, dass Sie in diesem Fall
                gegebenenfalls nicht sämtliche Funktionen dieser Website
                vollumfänglich werden nutzen können. Die Nutzer können darüber
                hinaus die Erfassung, der durch das Cookie erzeugten und auf
                ihre Nutzung der Website bezogenen Daten (inkl. Ihrer
                IP-Adresse) an Adobe sowie die Verarbeitung dieser Daten durch
                Adobe verhindern, indem sie das unter dem folgenden Link
                verfügbare Browser-Plug-In herunterladen und installieren:
                http://www.adobe.com/
              </a>
              de/privacy/ opt-out.html
            </p>
            <p>
              <br />
            </p>
          </li>
          <li data-list-text="17.">
            <h2 className="inline text-fluid-l">Analyse durch Wireminds</h2>
            <p>
              <br />
            </p>
            <p>
              Unsere Website nutzt die Zählpixeltechnologie der WiredMinds AG
              (www.wiredminds.de) zur Analyse des Besucherverhaltens.
            </p>
            <p>
              <br />
            </p>
            <p>
              Dabei werden Daten erhoben, verarbeitet und gespeichert, aus denen
              unter einem Pseudonym Nutzungsprofile erstellt werden. Wo möglich
              und sinnvoll werden diese Nutzungsprofile vollständig
              anonymisiert. Hierzu können Cookies zum Einsatz kommen. Cookies
              sind kleine Textdateien, die im Internet-Browser des Besuchers
              gespeichert werden und zur Wiedererkennung des Internet-Browsers
              dienen. Die erhobenen Daten, die auch personenbezogene Daten
              beinhalten können, werden an WiredMinds übermittelt oder direkt
              von WiredMinds erhoben. WiredMinds darf Informationen, die durch
              Besuche auf den Webseiten hinterlassen werden, nutzen, um
              anonymisierte Nutzungsprofile zu erstellen. Die dabei gewonnenen
              Daten
            </p>
            <p>
              werden ohne die gesondert erteilte Zustimmung des Betroffenen
              nicht benutzt, um den Besucher dieser Webseite persönlich zu
              identifizieren und sie werden nicht mit personenbezogenen Daten
              über den Träger des Pseudonyms zusammengeführt. Soweit IP-Adressen
              erfasst werden, erfolgt deren sofortige Anonymisierung durch
              Löschen des letzten Nummernblocks.
            </p>
            <p>
              <br />
            </p>
            <p>
              Der Datenerhebung, -verarbeitung und -speicherung kann jederzeit
              mit Wirkung für die Zukunft unter folgendem Link widersprochen
              werden: Vom Website-Tracking ausschließen.
            </p>
            <p>
              <br />
            </p>
          </li>
          <li data-list-text="18.">
            <h2 className="inline text-fluid-l">
              Verwendung von Bibliotheken (Webfonts)
            </h2>
            <p>
              <br />
            </p>
            <p>
              <a
                href="http://www.google.com/webfonts/)"
                class="a"
                target="_blank"
              >
                Um unsere Inhalte browserübergreifend korrekt und grafisch
                ansprechend darzustellen, verwenden wir auf dieser
                Websitebibliotheken und Schriftbibliotheken wie z. B. Google
                Webfonts (https://
              </a>
              www.google.com/webfonts/). Google Webfonts werden zur Vermeidung
              mehrfachen Ladens in den Cache Ihres Browsers übertragen. Falls
              der Browser die Google Webfonts nicht unterstützt oder den Zugriff
              unterbindet, werden Inhalte in einer Standardschrift angezeigt.
            </p>
            <p>
              <br />
            </p>
            <p>
              Der Aufruf vonbibliotheken oder Schriftbibliotheken löst
              automatisch eine Verbindung zum Betreiber der Bibliothek aus.
              Dabei ist es theoretisch möglich – aktuell allerdings auch unklar
              ob und ggf. zu welchen Zwecken – dass Betreiber entsprechender
              Bibliotheken Daten erheben.
            </p>
            <p>
              <br />
            </p>
            <p>
              <a
                href="http://www.google.com/policies/privacy/"
                class="a"
                target="_blank"
              >
                Die Datenschutzrichtlinie des Bibliothekbetreibers Google finden
                Sie hier: https://{" "}
              </a>
              <a href="http://www.google.com/policies/privacy/" target="_blank">
                www.google.com/policies/privacy/
              </a>
            </p>
            <p>
              <br />
            </p>
          </li>
          <li data-list-text="19.">
            <h2 className="inline text-fluid-l">
              Verwendung von Adobe Typekit
            </h2>
            <p>
              <br />
            </p>
            <p>
              Wir setzen Adobe Typekit zur visuellen Gestaltung unserer Website
              ein. Typekit ist ein Dienst der Adobe Systems Software Ireland
              Ltd. der uns den Zugriff auf eine Schriftartenbibliothek gewährt.
              Zur Einbindung der von uns benutzten Schriftarten, muss Ihr
              Browser eine Verbindung zu einem Server von Adobe in den USA
              aufbauen und die für unsere Website benötigte Schriftart
              herunterladen. Adobe erhält hierdurch die Information, dass von
              Ihrer IP-Adresse unsere Website aufgerufen wurde.
            </p>
            <p>
              <a
                href="http://www.adobe.com/privacy/typekit.html"
                class="a"
                target="_blank"
              >
                Weitere Informationen zu Adobe Typekit finden Sie in den
                Datenschutzhinweisen von Adobe, die Sie hier abrufen können:{" "}
              </a>
              <a
                href="http://www.adobe.com/privacy/typekit.html"
                target="_blank"
              >
                www.adobe.com/privacy/typekit.html
              </a>
            </p>
            <p>
              <br />
            </p>
          </li>
          <li data-list-text="20.">
            <h2 className="inline text-fluid-l">Social Media Plug-ins</h2>
            <p>
              <br />
            </p>
            <p>
              Auf unseren Webseiten werden Social Plugins der unten aufgeführten
              Anbieter eingesetzt. Die Plugins können Sie daran erkennen, dass
              sie mit dem entsprechenden Logo gekennzeichnet sind.
            </p>
            <p>
              <br />
            </p>
            <p>
              Über diese Plugins werden unter Umständen Informationen, zu denen
              auch personenbezogene Daten gehören können, an den
              Dienstebetreiber gesendet und ggf. von diesem genutzt. Wir
              verhindern die unbewusste und ungewollte Erfassung und Übertragung
              von Daten an den Diensteanbieter durch eine 2-Klick-Lösung. Um
            </p>
            <p>
              ein gewünschtes Social Plugin zu aktivieren, muss dieses erst
              durch Klick auf den entsprechenden Schalter aktiviert werden. Erst
              durch diese Aktivierung des Plugins wird auch die Erfassung von
              Informationen und deren Übertragung an den Diensteanbieter
              ausgelöst. Wir erfassen selbst keine personenbezogenen Daten
              mittels der Social Plugins oder über deren Nutzung.
            </p>
            <p>
              <br />
            </p>
            <p>
              Wir haben keinen Einfluss darauf, welche Daten ein aktiviertes
              Plugin erfasst und wie diese durch den Anbieter verwendet werden.
              Derzeit muss davon ausgegangen werden, dass eine direkte
              Verbindung zu den Diensten des Anbieters ausgebaut wird sowie
              mindestens die IP-Adresse und gerätebezogene Informationen erfasst
              und genutzt werden. Ebenfalls besteht die Möglichkeit, dass die
              Diensteanbieter versuchen, Cookies auf dem verwendeten Rechner zu
              speichern. Welche konkreten Daten hierbei erfasst und wie diese
              genutzt werden, entnehmen Sie bitte den Datenschutzhinweisen des
              jeweiligen Diensteanbieters. Hinweis: Falls Sie zeitgleich bei
              Facebook angemeldet sind, kann Facebook Sie als Besucher einer
              bestimmten Seite identifizieren.
            </p>
            <p>
              <br />
            </p>
            <p>
              Wir haben auf unserer Website die Social-Media-Buttons folgender
              Unternehmen eingebunden:
            </p>
            <p>
              <br />
            </p>
            <p>
              <a href="http://www.instgram.com/" class="a" target="_blank">
                Facebook, Www.facebook.com Instagram, www.instgram.
              </a>
              <a href="http://www.reddit.com/" class="a" target="_blank">
                com Reddit, www
              </a>
              <a href="http://www.twitter.com/" class="a" target="_blank">
                .reddit.com Twitter,www.twitter
              </a>
              <a href="http://www.patreon.com/" class="a" target="_blank">
                .com Patreon,www
              </a>
              <a href="http://www.linkedin.com/" class="a" target="_blank">
                .patreon.com Linkedin, www
              </a>
              <a href="http://www.gofundme.com/" class="a" target="_blank">
                .linkedin.com GoFundMe,www
              </a>
              <a href="http://www.linktr.ee/" class="a" target="_blank">
                .gofundme.com linktree,www.linktr
              </a>
              <a href="http://www.youtube.com/" class="a" target="_blank">
                .ee YouTube,
              </a>
              <a href="http://www.youtube.com/" target="_blank">
                www.youtube.com
              </a>
            </p>
            <p>
              <br />
            </p>
          </li>
          <li data-list-text="21.">
            <h2 className="inline text-fluid-l">Zahlungsart</h2>
            <p>
              <br />
            </p>
            <ol id="l6">
              <li
                data-list-text="1) "
                className="before:text-fluid-m before:content-[attr(data-list-text)]"
              >
                <h3 className="inline text-fluid-m">
                  Paypal:{" "}
                  <span class="p">
                    Der für die Verarbeitung Verantwortliche hat auf dieser
                    Internetseite Komponenten von PayPal integriert. PayPal ist
                    ein Online-Zahlungsdienstleister. Zahlungen werden über
                    sogenannte PayPal-Konten abgewickelt, die virtuelle
                    Privat-oder Geschäftskonten darstellen. Zudem besteht bei
                    PayPal die Möglichkeit, virtuelle Zahlungen über
                    Kreditkarten abzuwickeln, wenn ein Nutzer kein PayPal-Konto
                    unterhält. Ein PayPal-Konto wird über eine E-Mail-Adresse
                    geführt, weshalb es keine klassische Kontonummer gibt.
                    PayPal ermöglicht es, Online-Zahlungen an Dritte auszulösen
                    oder auch Zahlungen zu empfangen. PayPal übernimmt ferner
                    Treuhänderfunktionen und bietet Käuferschutzdienste an.
                  </span>
                </h3>
                <p>
                  <br />
                </p>
                <p>
                  Die Europäische Betreibergesellschaft von PayPal ist die
                  PayPal (Europe) S.à.r.l. &amp; Cie. S.C.A., 22-24 Boulevard
                  Royal, 2449 Luxembourg, Luxemburg.
                </p>
                <p>
                  <br />
                </p>
                <p>
                  Wählt die betroffene Person während des Bestellvorgangs in
                  unserem Online-Shop als Zahlungsmöglichkeit „PayPal&quot; aus,
                  werden automatisiert Daten der betroffenen Person an PayPal
                  übermittelt. Mit der Auswahl dieser Zahlungsoption willigt die
                </p>
                <p>
                  betroffene Person in die zur Zahlungsabwicklung erforderliche
                  Übermittlung personenbezogener Daten ein.
                </p>
                <p>
                  <br />
                </p>
                <p>
                  Bei den an PayPal übermittelten personenbezogenen Daten
                  handelt es sich in der Regel um Vorname, Nachname, Adresse,
                  Email-Adresse, IP-Adresse, Telefonnummer, Mobiltelefonnummer
                  oder andere Daten, die zur Zahlungsabwicklung notwendig sind.
                  Zur Abwicklung des Kaufvertrages notwendig sind auch solche
                  personenbezogenen Daten, die im Zusammenhang mit der
                  jeweiligen Bestellung stehen.
                </p>
                <p>
                  <br />
                </p>
                <p>
                  Die Übermittlung der Daten bezweckt die Zahlungsabwicklung und
                  die Betrugsprävention. Der für die Verarbeitung
                  Verantwortliche wird PayPal personenbezogene Daten
                  insbesondere dann übermitteln, wenn ein berechtigtes Interesse
                  für die Übermittlung gegeben ist. Die zwischen PayPal und dem
                  für die Verarbeitung Verantwortlichen ausgetauschten
                  personenbezogenen Daten werden von PayPal unter Umständen an
                  Wirtschaftsauskunfteien übermittelt. Diese Übermittlung
                  bezweckt die Identitäts- und Bonitätsprüfung.
                </p>
                <p>
                  <br />
                </p>
                <p>
                  PayPal gibt die personenbezogenen Daten gegebenenfalls an
                  verbundene Unternehmen und Leistungserbringer oder
                  Subunternehmer weiter, soweit dies zur Erfüllung der
                  vertraglichen Verpflichtungen erforderlich ist oder die Daten
                  im Auftrag verarbeitet werden sollen.
                </p>
                <p>
                  <br />
                </p>
                <p>
                  Die betroffene Person hat die Möglichkeit, die Einwilligung
                  zum Umgang mit personenbezogenen Daten jederzeit gegenüber
                  PayPal zu widerrufen. Ein Widerruf wirkt sich nicht auf
                  personenbezogene Daten aus, die zwingend zur (vertragsgemäßen)
                  Zahlungsabwicklung verarbeitet, genutzt oder übermittelt
                  werden müssen.
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <a
                    href="http://www.paypal.com/de/webapps/mpp/ua/privacy-full"
                    class="a"
                    target="_blank"
                  >
                    Die geltenden Datenschutzbestimmungen von PayPal können
                    unter https://{" "}
                  </a>
                  www.paypal.com/de/webapps/mpp/ua/privacy-full abgerufen
                  werden.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li
                data-list-text="2) "
                className="before:text-fluid-m before:content-[attr(data-list-text)]"
              >
                <h3 className="inline text-fluid-m">
                  Klarna:{" "}
                  <span class="p">
                    Der für die Verarbeitung Verantwortliche hat auf dieser
                    Internetseite Komponenten von Klarna integriert. Klarna ist
                    ein Online-Zahlungsdienstleister, der den Kauf auf Rechnung
                    oder eine flexible Ratenzahlung ermöglicht. Ferner werden
                    von Klarna weitere Services, wie beispielsweise ein
                    Käuferschutz oder eine Identitäts- und Bonitätsprüfung,
                    angeboten.
                  </span>
                </h3>
                <p>
                  <br />
                </p>
                <p>
                  Betreibergesellschaft von Klarna ist die Klarna AB, Sveavägen
                  46, 111 34 Stockholm, Schweden.
                </p>
                <p>
                  <br />
                </p>
                <p>
                  Wählt die betroffene Person während des Bestellvorgangs in
                  unserem Online-Shop als Zahlungsmöglichkeit entweder den „Kauf
                  auf Rechnung&quot; oder „Ratenkauf&quot; aus, werden
                  automatisiert Daten der betroffenen Person an Klarna
                  übermittelt. Mit der Auswahl einer dieser Zahlungsoptionen
                  willigt die betroffene Person in diese, zur Abwicklung des
                  Rechnungs- oder Ratenkaufes oder zur Identitäts- und
                  Bonitätsprüfung erforderliche, Übermittlung personenbezogener
                  Daten ein.
                </p>
                <p>
                  Bei den an Klarna übermittelten personenbezogenen Daten
                  handelt es sich in der Regel um Vorname, Nachname, Adresse,
                  Geburtsdatum, Geschlecht, Email-Adresse, IP-Adresse,
                  Telefonnummer, Mobiltelefonnummer sowie um andere Daten, die
                  zur Abwicklung eines Rechnungs- oder Ratenkaufs notwendig
                  sind. Zur Abwicklung des Kaufvertrages notwendig sind auch
                  solche personenbezogenen Daten, die im Zusammenhang mit der
                  jeweiligen Bestellung stehen. Insbesondere kann es zum
                  wechselseitigen Austausch von Zahlungsinformationen, wie
                  Bankverbindung, Kartennummer, Gültigkeitsdatum und CVC-Code,
                  Artikelanzahl, Artikelnummer, Daten zu Waren und
                  Dienstleistungen, Preise und steuerliche Abgaben, Angaben zum
                  früheren Kaufverhalten oder sonstige Angaben zur finanziellen
                  Situation der betroffenen Person, kommen.
                </p>
                <p>
                  <br />
                </p>
                <p>
                  Die Übermittlung der Daten bezweckt insbesondere die
                  Identitätsüberprüfung, die Zahlungsadministration und die
                  Betrugsprävention. Der für die Verarbeitung Verantwortliche
                  wird Klarna personenbezogene Daten insbesondere dann
                  übermitteln, wenn ein berechtigtes Interesse für die
                  Übermittlung gegeben ist. Die zwischen Klarna und dem für die
                  Verarbeitung Verantwortlichen ausgetauschten personenbezogenen
                  Daten werden von Klarna an Wirtschaftsauskunfteien
                  übermittelt. Diese Übermittlung bezweckt die Identitäts- und
                  Bonitätsprüfung.
                </p>
                <p>
                  <br />
                </p>
                <p>
                  Klarna gibt die personenbezogenen Daten auch an verbundene
                  Unternehmen (Klarna Gruppe) und Leistungserbringer oder
                  Subunternehmer weiter, soweit dies zur Erfüllung der
                  vertraglichen Verpflichtungen erforderlich ist oder die Daten
                  im Auftrag verarbeitet werden sollen.
                </p>
                <p>
                  <br />
                </p>
                <p>
                  Zur Entscheidung über die Begründung, Durchführung oder
                  Beendigung einer Vertragsbeziehung erhebt und nutzt Klarna
                  Daten und Informationen über das bisherige Zahlungsverhalten
                  der betroffenen Person sowie Wahrscheinlichkeitswerte für
                  deren Verhalten in der Zukunft (sogenanntes Scoring). Die
                  Berechnung des Scorings wird auf der Basis wissenschaftlich
                  anerkannter mathematisch-statistischer Verfahren durchgeführt.
                </p>
                <p>
                  <br />
                </p>
                <p>
                  Die betroffene Person hat die Möglichkeit, die Einwilligung
                  zum Umgang mit personenbezogenen Daten jederzeit gegenüber
                  Klarna zu widerrufen. Ein Widerruf wirkt sich nicht auf
                  personenbezogene Daten aus, die zwingend zur (vertragsgemäßen)
                  Zahlungsabwicklung verarbeitet, genutzt oder übermittelt
                  werden müssen.
                </p>
                <p>
                  <br />
                </p>
                <p>
                  Die geltenden Datenschutzbestimmungen von Klarna können unter
                  https://
                  cdn.klarna.com/1.0/shared/content/policy/data/de_de/data_protection.pdf
                  abgerufen werden.
                </p>
                <p>
                  <br />
                </p>
              </li>
              <li
                data-list-text="3) "
                className="before:text-fluid-m before:content-[attr(data-list-text)]"
              >
                <h3 className="inline text-fluid-m">
                  Sofortüberweisung:{" "}
                  <span class="p">
                    Der für die Verarbeitung Verantwortliche hat auf dieser
                    Internetseite Komponenten von Sofortüberweisung integriert.
                    Sofortüberweisung ist ein Zahlungsdienst, der eine
                    bargeldlose Zahlung von Produkten und Dienstleistungen im
                    Internet ermöglicht. Sofortüberweisung bildet ein
                    technisches Verfahren ab, durch welches der Online-Händler
                    unverzüglich eine Zahlungsbestätigung erhält. So wird ein
                    Händler in die Lage versetzt, Waren,
                  </span>
                </h3>
              </li>
            </ol>
            <p>
              Dienstleistungen oder Downloads sofort nach der Bestellung an den
              Kunden auszuliefern.
            </p>
            <p>
              <br />
            </p>
            <p>
              Betreibergesellschaft von Sofortüberweisung ist die SOFORT GmbH,
              Fußbergstraße 1, 82131 Gauting, Deutschland.
            </p>
            <p>
              <br />
            </p>
            <p>
              Wählt die betroffene Person während des Bestellvorgangs in unserem
              Online-Shop als Zahlungsmöglichkeit „Sofortüberweisung&quot; aus,
              werden automatisiert Daten der betroffenen Person an
              Sofortüberweisung übermittelt. Mit einer Auswahl dieser
              Zahlungsoption willigt die betroffene Person in eine zur
              Zahlungsabwicklung erforderliche Übermittlung personenbezogener
              Daten ein.
            </p>
            <p>
              <br />
            </p>
            <p>
              Bei der Kaufabwicklung über Sofortüberweisung übermittelt der
              Käufer die PIN und die TAN an die Sofort GmbH. Sofortüberweisung
              führt sodann nach technischer Überprüfung des Kontostandes und
              Abruf weiterer Daten zur Prüfung der Kontodeckung eine Überweisung
              an den Online-Händler aus. Die Durchführung der Finanztransaktion
              wird dem Online-Händler sodann automatisiert mitgeteilt.
            </p>
            <p>
              <br />
            </p>
            <p>
              Bei den mit Sofortüberweisung ausgetauschten personenbezogenen
              Daten handelt es sich um Vorname, Nachname, Adresse,
              Email-Adresse, IP-Adresse, Telefonnummer, Mobiltelefonnummer oder
              andere Daten, die zur Zahlungsabwicklung notwendig sind. Die
              Übermittlung der Daten bezweckt die Zahlungsabwicklung und die
              Betrugsprävention. Der für die Verarbeitung Verantwortliche wird
              Sofortüberweisung andere personenbezogene Daten auch dann
              übermitteln, wenn ein berechtigtes Interesse für die Übermittlung
              gegeben ist. Die zwischen Sofortüberweisung und dem für die
              Verarbeitung Verantwortlichen ausgetauschten personenbezogenen
              Daten werden von Sofortüberweisung unter Umständen an
              Wirtschaftsauskunfteien übermittelt. Diese Übermittlung bezweckt
              die Identitäts- und Bonitätsprüfung.
            </p>
            <p>
              <br />
            </p>
            <p>
              Sofortüberweisung gibt die personenbezogenen Daten gegebenenfalls
              an verbundene Unternehmen und Leistungserbringer oder
              Subunternehmer weiter, soweit dies zur Erfüllung der vertraglichen
              Verpflichtungen erforderlich ist oder die Daten im Auftrag
              verarbeitet werden sollen.
            </p>
            <p>
              <br />
            </p>
            <p>
              Die betroffene Person hat die Möglichkeit, die Einwilligung zum
              Umgang mit personenbezogenen Daten jederzeit gegenüber
              Sofortüberweisung zu widerrufen. Ein Widerruf wirkt sich nicht auf
              personenbezogene Daten aus, die zwingend zur (vertragsgemäßen)
              Zahlungsabwicklung verarbeitet, genutzt oder übermittelt werden
              müssen.
            </p>
            <p>
              <br />
            </p>
            <p>
              <a
                href="http://www.sofort.com/ger-DE/datenschutzerklaerung-sofort-gmbh/"
                class="a"
                target="_blank"
              >
                Die geltenden Datenschutzbestimmungen von Sofortüberweisung
                können unter https://
              </a>
              www.sofort.com/ger-DE/datenschutzerklaerung-sofort-gmbh/ abgerufen
              werden.
            </p>
            <p>
              <br />
            </p>
          </li>
          <li data-list-text="22.">
            <h2 className="inline text-fluid-l">Google Ads</h2>
            <p>
              Diese Website verwendet Google Ads. Google Ads ist ein
              Online-Werbeprogramm der Google Ireland Limited („Google&quot;),
              Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p>
              <br />
            </p>
            <p>
              Im Rahmen von Google Ads nutzen wir das so genannte
              Conversion-Tracking. Wenn Sie auf eine von Google geschaltete
              Anzeige klicken wird ein Cookie für das Conversion-Tracking
              gesetzt. Bei Cookies handelt es sich um kleine Textdateien, die
              der Internet-Browser auf dem Computer des Nutzers ablegt. Diese
              Cookies verlieren nach 30 Tagen ihre Gültigkeit und dienen nicht
              der persönlichen Identifizierung der Nutzer. Besucht der Nutzer
              bestimmte Seiten dieser Website und das Cookie ist noch nicht
              abgelaufen, können Google und wir erkennen, dass der Nutzer auf
              die Anzeige geklickt hat und zu dieser Seite weitergeleitet wurde.
            </p>
            <p>
              <br />
            </p>
            <p>
              Jeder Google Ads-Kunde erhält ein anderes Cookie. Die Cookies
              können nicht über die Websites von Google Ads-Kunden nachverfolgt
              werden. Die mithilfe des Conversion-Cookies eingeholten
              Informationen dienen dazu, Conversion-Statistiken für Google
              Ads-Kunden zu erstellen, die sich für Conversion-Tracking
              entschieden haben. Die Kunden erfahren die Gesamtanzahl der
              Nutzer, die auf ihre Anzeige geklickt haben und zu einer mit einem
              Conversion-Tracking-Tag versehenen Seite weitergeleitet wurden.
              Sie erhalten jedoch keine Informationen, mit denen sich Nutzer
              persönlich identifizieren lassen. Wenn Sie nicht am Tracking
              teilnehmen möchten, können Sie dieser Nutzung widersprechen, indem
              Sie das Cookie des Google Conversion-Trackings über ihren
              Internet-Browser unter Nutzereinstellungen leicht deaktivieren.
              Sie werden sodann nicht in die Conversion-Tracking Statistiken
              aufgenommen.
            </p>
            <p>
              <br />
            </p>
            <p>
              Die Speicherung von „Conversion-Cookies&quot; und die Nutzung
              dieses Tracking-Tools erfolgen auf Grundlage von Art. 6 Abs. 1
              lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse
              an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot als
              auch seine Werbung zu optimieren. Sofern eine entsprechende
              Einwilligung abgefragt wurde (z. B. eine Einwilligung zur
              Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich
              auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist
              jederzeit widerrufbar.
            </p>
            <p>
              <br />
            </p>
            <p>
              Mehr Informationen zu Google Ads und Google Conversion-Tracking
              finden Sie in den Datenschutzbestimmungen von Google:
              https://policies.google.com/privacy? hl=de.
            </p>
            <p>
              <br />
            </p>
            <p>
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen
              von Cookies informiert werden und Cookies nur im Einzelfall
              erlauben, die Annahme von Cookies für bestimmte Fälle oder
              generell ausschließen sowie das automatische Löschen der Cookies
              beim Schließen des Browsers aktivieren. Bei der Deaktivierung von
              Cookies kann die Funktionalität dieser Website eingeschränkt sein.
            </p>
            <p>
              <br />
            </p>
          </li>
          <li data-list-text="23.">
            <h2 className="inline text-fluid-l">Google Remarketing</h2>
            <p>
              <br />
            </p>
            <p>
              Diese Website verwendet die Remarketing-Funktion der Google Inc.
              Die Funktion dient dazu, Webseitenbesuchern innerhalb des
              Google-Werbenetzwerks interessenbezogene Werbeanzeigen zu
              präsentieren. Im Browser des Webseitenbesuchers wird ein sog.
              „Cookie&quot; gespeichert, der es ermöglicht, den
            </p>
            <p>
              Besucher wiederzuerkennen, wenn dieser Webseiten aufruft, die dem
              Werbenetzwerk von Google angehören. Auf diesen Seiten können dem
              Besucher Werbeanzeigen präsentiert werden, die sich auf Inhalte
              beziehen, die der Besucher zuvor auf Webseiten aufgerufen hat, die
              die Remarketing Funktion von Google verwenden.
            </p>
            <p>
              <br />
            </p>
            <p>
              <a
                href="http://www.google.com/settings/ads"
                class="a"
                target="_blank"
              >
                Nach eigenen Angaben erhebt Google bei diesem Vorgang keine
                personenbezogenen Daten. Sollten Sie die Funktion Remarketing
                von Google dennoch nicht wünschen, können Sie diese
                grundsätzlich deaktivieren, indem Sie die entsprechenden
                Einstellungen unter{" "}
              </a>
              <a
                href="http://www.networkadvertising.org/managing/opt_out.asp"
                class="a"
                target="_blank"
              >
                http://www.google.com/settings/ads vornehmen. Alternativ können
                Sie den Einsatz von Cookies für interessenbezogene Werbung über
                die Werbenetzwerkinitiative deaktivieren, indem Sie den
                Anweisungen unter{" "}
              </a>
              http://www.networkadvertising.org/managing/opt_out.asp folgen.
            </p>
            <p>
              <br />
            </p>
          </li>
          <li data-list-text="24.">
            <h2 className="inline text-fluid-l">
              Rechtsgrundlage der Verarbeitung
            </h2>
            <p>
              <br />
            </p>
            <p>
              Art. 6 I lit. a DSGVO dient unserem Unternehmen als
              Rechtsgrundlage für Verarbeitungsvorgänge, bei denen wir eine
              Einwilligung für einen bestimmten Verarbeitungszweck einholen. Ist
              die Verarbeitung personenbezogener Daten zur Erfüllung eines
              Vertrags, dessen Vertragspartei die betroffene Person ist,
              erforderlich, wie dies beispielsweise bei Verarbeitungsvorgängen
              der Fall ist, die für eine Lieferung von Waren oder die Erbringung
              einer sonstigen Leistung oder Gegenleistung notwendig sind, so
              beruht die Verarbeitung auf Art. 6 I lit. b DSGVO. Gleiches gilt
              für solche Verarbeitungsvorgänge die zur Durchführung
              vorvertraglicher Maßnahmen erforderlich sind, etwa in Fällen von
              Anfragen zur unseren Produkten oder Leistungen. Unterliegt unser
              Unternehmen einer rechtlichen Verpflichtung durch welche eine
              Verarbeitung von personenbezogenen Daten erforderlich wird, wie
              beispielsweise zur Erfüllung steuerlicher Pflichten, so basiert
              die Verarbeitung auf Art. 6 I lit. c DSGVO. In seltenen Fällen
              könnte die Verarbeitung von personenbezogenen Daten erforderlich
              werden, um lebenswichtige Interessen der betroffenen Person oder
              einer anderen natürlichen Person zu schützen. Dies wäre
              beispielsweise der Fall, wenn ein Besucher in unserem Betrieb
              verletzt werden würde und daraufhin sein Name, sein Alter, seine
              Krankenkassendaten oder sonstige lebenswichtige Informationen an
              einen Arzt, ein Krankenhaus oder sonstige Dritte weitergegeben
              werden müssten. Dann würde die Verarbeitung auf Art. 6 I lit. d
              DSGVO beruhen. Letztlich könnten Verarbeitungsvorgänge auf Art. 6
              I lit. f DSGVO beruhen. Auf dieser Rechtsgrundlage basieren
              Verarbeitungsvorgänge, die von keiner der vorgenannten
              Rechtsgrundlagen erfasst werden, wenn die Verarbeitung zur Wahrung
              eines berechtigten Interesses unseres Unternehmens oder eines
              Dritten erforderlich ist, sofern die Interessen, Grundrechte und
              Grundfreiheiten des Betroffenen nicht überwiegen. Solche
              Verarbeitungsvorgänge sind uns insbesondere deshalb gestattet,
              weil sie durch den europäischen Gesetzgeber besonders erwähnt
              wurden. Er vertrat insoweit die Auffassung, dass ein berechtigtes
              Interesse anzunehmen sein könnte, wenn die betroffene Person ein
              Kunde des Verantwortlichen ist (Erwägungsgrund 47 Satz 2 DSGVO).
            </p>
            <p>
              <br />
            </p>
          </li>
          <li data-list-text="25.">
            <h2 className="inline text-fluid-l">
              Berechtigte Interessen an der Verarbeitung, die von dem
              Verantwortlichen oder einem Dritten verfolgt werden
            </h2>
            <p>
              Basiert die Verarbeitung personenbezogener Daten auf Artikel 6 I
              lit. f DSGVO ist unser berechtigtes Interesse die Durchführung
              unserer Geschäftstätigkeit zugunsten des Wohlergehens all unserer
              Mitarbeiter und unserer Anteilseigner.
            </p>
            <p>
              <br />
            </p>
          </li>
          <li data-list-text="26.">
            <h2 className="inline text-fluid-l">
              Dauer, für die die personenbezogenen Daten gespeichert werden
            </h2>
            <p>
              <br />
            </p>
            <p>
              Das Kriterium für die Dauer der Speicherung von personenbezogenen
              Daten ist die jeweilige gesetzliche Aufbewahrungsfrist. Nach
              Ablauf der Frist werden die entsprechenden Daten routinemäßig
              gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder
              Vertragsanbahnung erforderlich sind.
            </p>
            <p>
              <br />
            </p>
          </li>
          <li data-list-text="27.">
            <h2 className="inline text-fluid-l">
              Gesetzliche oder vertragliche Vorschriften zur Bereitstellung der
              personenbezogenen Daten; Erforderlichkeit für den
              Vertragsabschluss; Verpflichtung der betroffenen Person, die
              personenbezogenen Daten bereitzustellen; mögliche Folgen der
              Nichtbereitstellung
            </h2>
            <p>
              <br />
            </p>
            <p>
              Wir klären Sie darüber auf, dass die Bereitstellung
              personenbezogener Daten zum Teil gesetzlich vorgeschrieben ist
              (z.B. Steuervorschriften) oder sich auch aus vertraglichen
              Regelungen (z.B. Angaben zum Vertragspartner) ergeben kann.
            </p>
            <p>
              Mitunter kann es zu einem Vertragsschluss erforderlich sein, dass
              eine betroffene Person uns personenbezogene Daten zur Verfügung
              stellt, die in der Folge durch uns verarbeitet werden müssen. Die
              betroffene Person ist beispielsweise verpflichtet uns
              personenbezogene Daten bereitzustellen, wenn unser Unternehmen mit
              ihr einen Vertrag abschließt. Eine Nichtbereitstellung der
              personenbezogenen Daten hätte zur Folge, dass der Vertrag mit dem
              Betroffenen nicht geschlossen werden könnte. Vor einer
              Bereitstellung personenbezogener Daten durch den Betroffenen muss
              sich der Betroffene an einen unserer Mitarbeiter wenden. Unser
              Mitarbeiter klärt den Betroffenen einzelfallbezogen darüber auf,
              ob die Bereitstellung der personenbezogenen Daten gesetzlich oder
              vertraglich vorgeschrieben oder für den Vertragsabschluss
              erforderlich ist, ob eine Verpflichtung besteht, die
              personenbezogenen Daten bereitzustellen, und welche Folgen die
              Nichtbereitstellung der personenbezogenen Daten hätte.
            </p>
            <p>
              <br />
            </p>
          </li>
          <li data-list-text="28.">
            <h2 className="inline text-fluid-l">
              Änderung der Datenschutzbestimmung
            </h2>
            <p>
              <br />
            </p>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit
              sie stets den aktuellen rechtlichen Anforderungen entspricht oder
              um Änderungen unserer Leistungen in der Datenschutzerklärung
              umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren
              erneuten Besuch gilt dann die neue Datenschutzerklärung.
            </p>
            <p>
              <br />
            </p>
          </li>
          <li data-list-text="29.">
            <h2 className="inline text-fluid-l">
              Bestehen einer automatisierten Entscheidungsfindung
            </h2>
          </li>
        </ol>
        <p>
          <br />
        </p>
        <p>
          Als verantwortungsbewusstes Unternehmen verzichten wir auf eine
          automatische Entscheidungsfindung oder ein Profiling.
        </p>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
