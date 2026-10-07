#!/usr/bin/env bash
# De 160 afbeeldingen die nog van de oude WordPress-site laadden naar public/media halen.
# Draaien vanuit de projectmap in je Codespace:
#
#   bash haal-media.sh
#
# Daarna toevoegen aan de repo:
#   git add public/media/wp-content && git commit -m "Afbeeldingen van het oude domein naar de eigen map"

ok=0; fout=0
while read -r u; do
  [ -z "$u" ] && continue
  f="public/media$u"
  if [ -f "$f" ]; then ok=$((ok+1)); continue; fi
  mkdir -p "$(dirname "$f")"
  code=$(curl -sS --max-time 30 -o "$f" -w "%{http_code}" "https://hrmforce.com$u" || echo 000)
  if [ "$code" = "200" ] && [ -s "$f" ]; then
    ok=$((ok+1))
  else
    rm -f "$f"; fout=$((fout+1)); echo "MISLUKT $code $u"
  fi
done <<'LIJST'
/wp-content/uploads/2017/02/World_Supportteam-500x9999.png
/wp-content/uploads/2017/04/Q-Assessments-logo-new.png
/wp-content/uploads/2017/04/new-microsoft-logo-square-large-1024x238.jpg
/wp-content/uploads/2017/11/Schermafbeelding-2017-11-29-om-13.34.34-e1631624186839.png
/wp-content/uploads/2017/12/Big-Five-Model-1.png
/wp-content/uploads/2018/02/360-graden-feedback-header.webp
/wp-content/uploads/2018/02/CanMeds-hrmforce-v2.webp
/wp-content/uploads/2018/02/Competentie.png
/wp-content/uploads/2018/02/Drijfveren-hrmforce.png
/wp-content/uploads/2018/02/Planningsgesprek-hrmforce.png
/wp-content/uploads/2018/02/Selectiegesprek-hrmforce.png
/wp-content/uploads/2018/02/canmeds-300x300.jpg
/wp-content/uploads/2018/02/hrmforce-CTA-360-feedback-v2.webp
/wp-content/uploads/2018/02/priscilla-du-preez-234138-1-e1518357125502.jpg
/wp-content/uploads/2018/03/Bedrijfswagenbeleid-hrmforce.png
/wp-content/uploads/2018/03/Cognitieve-capaciteitentest-hrmforce-artikel.png
/wp-content/uploads/2018/03/Gedragscode-werknemers-hrmforce.png
/wp-content/uploads/2018/03/IJsbergmodel-hrmforce.png
/wp-content/uploads/2018/03/Leiderschap-hrmforce.png
/wp-content/uploads/2018/03/Online-Assessment-artikel.jpg
/wp-content/uploads/2018/03/Ontwikkelingscyclus-hrmforce.png
/wp-content/uploads/2018/03/Performance-management-v2.jpg
/wp-content/uploads/2018/03/Werkplekbeleid-hrmforce.png
/wp-content/uploads/2018/03/hrmforce-Eindejaarsgesprekken-5-tips.jpg
/wp-content/uploads/2018/04/Training-leiderschap-hrmforce-1.png
/wp-content/uploads/2018/05/Personeels-Informatie-Systeem-hrmforce.png
/wp-content/uploads/2018/05/Training-Team-Analyse.png
/wp-content/uploads/2018/05/Training-evaluatie-gesprekken.png
/wp-content/uploads/2018/05/voortgangsgesprek-hrmforce-v2.png
/wp-content/uploads/2018/08/reference-check-v2.jpg
/wp-content/uploads/2018/09/Leiderschap-scan-CTA-hrmforce.png
/wp-content/uploads/2018/11/Training-omgaan-met-conflicten.png
/wp-content/uploads/2018/11/Voorkom-mismatch-hrmforce-1.jpg
/wp-content/uploads/2018/12/Persoonlijk-ontwikkel-plan-POP-1024x773.png
/wp-content/uploads/2018/12/Webp.net-compress-image-2.jpg
/wp-content/uploads/2019/02/Webp.net-compress-image-9.jpg
/wp-content/uploads/2019/02/hrmforce-SBL-competenties.jpg
/wp-content/uploads/2019/03/hrmforce-CTA-Selectie.png
/wp-content/uploads/2019/03/hrmforce-instrumenten-selectie.jpg
/wp-content/uploads/2019/06/hrmforce-bedrijfscultuur.jpg
/wp-content/uploads/2019/07/hrmforce-de-rol-van-HR.jpg
/wp-content/uploads/2019/10/Schermafbeelding-2019-10-17-om-13.48.04.png
/wp-content/uploads/2019/10/Webp.net-compress-image-19.jpg
/wp-content/uploads/2019/11/Schermafbeelding-2019-11-26-om-14.13.29.png
/wp-content/uploads/2020/01/Competentieontwikkeling-leerkrachten.jpg
/wp-content/uploads/2020/01/Webp.net-compress-image-20.jpg
/wp-content/uploads/2020/01/hrmforce-bila-gesprekken.jpg
/wp-content/uploads/2020/01/hrmforce-werkdruk-onderwijs.jpg
/wp-content/uploads/2020/05/hrmforce-gesprescylcus-v2.png
/wp-content/uploads/2020/05/image-1024x508.png
/wp-content/uploads/2020/07/hrmforce-discriminatie-sollicitaties3.jpg
/wp-content/uploads/2020/08/Schermafbeelding-2020-08-19-om-11.28.11.png
/wp-content/uploads/2020/08/hrmforce-organisatie-cultuur-scan.jpg
/wp-content/uploads/2020/09/Webp.net-compress-image-11-300x180.jpg
/wp-content/uploads/2020/09/Webp.net-compress-image-12-300x180.jpg
/wp-content/uploads/2020/09/Webp.net-compress-image-13-300x180.jpg
/wp-content/uploads/2020/09/Webp.net-compress-image-15-300x180.jpg
/wp-content/uploads/2020/09/Webp.net-compress-image-16-300x180.jpg
/wp-content/uploads/2020/09/Webp.net-compress-image-17-300x180.jpg
/wp-content/uploads/2020/09/Webp.net-compress-image-18-1-300x180.jpg
/wp-content/uploads/2020/09/Webp.net-compress-image-18-2-300x180.jpg
/wp-content/uploads/2020/09/Webp.net-compress-image-18-300x180.jpg
/wp-content/uploads/2020/09/Webp.net-compress-image-5-300x180.jpg
/wp-content/uploads/2020/09/Webp.net-compress-image-7-1-300x180.jpg
/wp-content/uploads/2020/09/hrmforce-ondernemerschap-v2-300x180.jpg
/wp-content/uploads/2020/09/hrmforce-overheid-300x180.png
/wp-content/uploads/2021/02/360graden-feedback.svg
/wp-content/uploads/2021/02/hrmforce-recruitment-tips-1.png
/wp-content/uploads/2021/03/hrmforce-teamontwikkeling-2.jpg
/wp-content/uploads/2021/05/vlootschouw-hrmforce.jpg
/wp-content/uploads/2021/07/Modern-voortgangsgesprek-1.jpg
/wp-content/uploads/2021/09/hrmforce-KC-coaching.jpg
/wp-content/uploads/2021/10/hrmforce-KC-ontwikkelbehoefte-MT.jpg
/wp-content/uploads/2021/11/persbericht.jpg
/wp-content/uploads/2022/01/beoordelingsgesprekken.jpg
/wp-content/uploads/2022/02/ass-afb1.png
/wp-content/uploads/2022/02/ass-afb3.png
/wp-content/uploads/2022/02/hrmforce-training-illustratie-2.png
/wp-content/uploads/2022/03/Competentietaal-1.jpg
/wp-content/uploads/2022/03/Het-goede-gesprek-hrmforce.jpg
/wp-content/uploads/2022/05/hrmforce-illustratie-4.webp
/wp-content/uploads/2022/05/hrmforce-zij-instroom-v2.jpg
/wp-content/uploads/2022/06/Wat-is-emotionele-intelligentie-nou-precies_-visual-selection-1-1.png
/wp-content/uploads/2022/06/hrmforce-EQ-.jpg
/wp-content/uploads/2022/07/Assessment.webp
/wp-content/uploads/2022/07/way-of-working-eng.webp
/wp-content/uploads/2022/08/Digitale-recruitment-1.webp
/wp-content/uploads/2022/09/Duurzame-inzetbaarheid.webp
/wp-content/uploads/2022/09/werkgeluk.webp
/wp-content/uploads/2022/10/Assessment-ontwikkeling-artikel.webp
/wp-content/uploads/2022/11/Werkstress-voorkomen-v2.webp
/wp-content/uploads/2022/11/verborgen-talent.webp
/wp-content/uploads/2022/12/hybride-werken.webp
/wp-content/uploads/2022/12/reflecting-hrmforce-2.webp
/wp-content/uploads/2023/01/Jaarcyclus-hrmforce.webp
/wp-content/uploads/2023/01/werkplezier.webp
/wp-content/uploads/2023/02/Drijfveren-en-motivatie-een-goed-stel-samen-visual-selection-1-1024x721.png
/wp-content/uploads/2023/02/Drijfveren-en-motivatie-een-goed-stel-samen-visual-selection-1024x719.png
/wp-content/uploads/2023/02/besparen-op-hrm.webp
/wp-content/uploads/2023/02/hrmforce-CTA-feedback-scan-1.webp
/wp-content/uploads/2023/03/hrmforce-CTA-studiekeuze-test-v2.jpg
/wp-content/uploads/2023/03/studiekeuze-hrmforce.webp
/wp-content/uploads/2023/04/De-zeven-hoofddomeinen-van-de-PAPI-3-visual-selection-1.png
/wp-content/uploads/2023/05/NLP-recruitment-development.webp
/wp-content/uploads/2023/05/leadership.webp
/wp-content/uploads/2023/06/objectieve-selectiegesprekken.webp
/wp-content/uploads/2023/08/hrmforce-CTA-studiekeuze-test-v2.jpg
/wp-content/uploads/2023/10/9-box-grid-hrmforce.jpg
/wp-content/uploads/2023/10/9box-grid.webp
/wp-content/uploads/2023/10/Lencioni.jpg
/wp-content/uploads/2023/10/Team-ontwikkeling.webp
/wp-content/uploads/2023/10/expertsessie-Jan-Hein-Ooms-Lencioni-1024x576.webp
/wp-content/uploads/2023/10/new-interview-cycle.webp
/wp-content/uploads/2023/11/verbindend-leiderschap.webp
/wp-content/uploads/2024/07/hrmforce-vragenlijsten-recruitment.jpg
/wp-content/uploads/2024/09/DEI-vragenlijst.jpg
/wp-content/uploads/2024/10/hrmforce-in-top-10.jpg
/wp-content/uploads/2024/10/hrmforce-integriteit.jpg
/wp-content/uploads/2025/03/placeholder-assessment2.png
/wp-content/uploads/2025/04/29945959046_cb48bb8fa9_c.jpg
/wp-content/uploads/2025/04/De-Watson-Glaser-Assessment_-Een-betrouwbare-meetmethode-visual-selection-1.png
/wp-content/uploads/2025/04/Kern-van-het-de-Big-5-persoonlijkheidskenmerken-visual-selection.png
/wp-content/uploads/2025/04/Waarom-kritisch-denken-zo-belangrijk-is-visual-selection.png
/wp-content/uploads/2025/04/Wat-betekenen-deze-kenmerken-in-de-praktijk_-visual-selection.png
/wp-content/uploads/2025/04/caption-id_attachment_22144_-align_aligncenter_-width_732_-Bron_-Elcovs_caption-visual-selection-1.png
/wp-content/uploads/2025/04/caption-id_attachment_22144_-align_aligncenter_-width_732_-Bron_-Elcovs_caption-visual-selection.png
/wp-content/uploads/2025/04/kenny-eliason-2RRq1BHPq4E-unsplash.jpg
/wp-content/uploads/2025/06/celpax-ZoGOw9WYMtQ-unsplash-scaled.jpg
/wp-content/uploads/2025/06/visual-selection-11.png
/wp-content/uploads/2025/06/visual-selection-12.png
/wp-content/uploads/2025/09/ChatGPT-Image-15-sep-2025-15_13_13.png
/wp-content/uploads/2025/09/Schermafbeelding-2025-09-02-172257.png
/wp-content/uploads/2025/09/Schermafbeelding-2025-09-02-172353.png
/wp-content/uploads/2025/09/assessment-6078645_1280.png
/wp-content/uploads/2025/09/assessment-8777361_1280.png
/wp-content/uploads/2025/09/collaboration-9312740_1280.png
/wp-content/uploads/2025/09/filter-4881943_1280.png
/wp-content/uploads/2025/09/gewicht-assessment.png
/wp-content/uploads/2025/09/graduation-6840941_1280-1.png
/wp-content/uploads/2025/09/group-296570_1280.png
/wp-content/uploads/2025/09/men-304299_1280.png
/wp-content/uploads/2025/09/people-4328648_1280.png
/wp-content/uploads/2025/09/silhouette-3141264_1280.png
/wp-content/uploads/2025/09/stars.svg
/wp-content/uploads/2025/09/sterren.png
/wp-content/uploads/2025/10/Disc-test-screen.png
/wp-content/uploads/2025/11/DISC-kleuren-uitleg-in-het-kort-visual-selection.png
/wp-content/uploads/2025/11/Wat-zijn-de-4Gs-van-feedback_-visual-selection.png
/wp-content/uploads/2025/11/ben-radebe-8ce92J6_Y3k-unsplash-scaled.png
/wp-content/uploads/2025/11/h-m-ko2V6XZSbsQ-unsplash-scaled.png
/wp-content/uploads/2025/11/roberto-sorin-7qn9wis0Wns-unsplash.jpg
/wp-content/uploads/2025/12/Wat-bedoelen-we-met-communicatiestijlen-op-de-werkvloer_-visual-selection.png
/wp-content/uploads/2025/12/Wat-is-leiderschapsontwikkeling_-visual-selection.png
/wp-content/uploads/2025/12/Wat-veroorzaakt-conflicten-op-het-werk_-visual-selection-1.png
/wp-content/uploads/2025/12/Wat-veroorzaakt-conflicten-op-het-werk_-visual-selection.png
/wp-content/uploads/2025/12/Welke-communicatiestijlen-zie-je-het-vaakst-in-teams_-visual-selection.png
/wp-content/uploads/2025/12/dylan-gillis-KdeqA3aTnBY-unsplash-scaled.jpg
/wp-content/uploads/2025/12/tim-gouw-bwki71ap-y8-unsplash.jpg
/wp-content/uploads/2026/01/minator-yang-oJjfBo_0R_8-unsplash.jpg
/wp-content/uploads/2026/04/creativecanvasshop-businessman-10190175_1280-1024x682.png
LIJST

echo
echo "opgehaald: $ok  mislukt: $fout  (samen ongeveer 25 MB)"
