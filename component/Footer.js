import React, { useEffect, useRef, useState } from "react";
import footer_logo from '@/public/images/items/logo.png';
import Image from "next/image";
import Link from "next/link";
import {useRouter} from 'next/router';
import { make_msg, makeRequest } from "@/core/util";

const Footer = () => {
    const [fb_username, set_fb_username] = useState(null);
    const [fb_email, set_fb_email] = useState(null);
    const [feedback, set_feedback] = useState(null);
    const [message, handleMessage] = useState(null);
    const showAns = useRef(null);
    const showLoad = useRef(null);
    const showInput = useRef(null);
    const router = useRouter();
    const {pathname} = router;
    
    function addMsgClick(e) {
        e.preventDefault();
        if(message == null || message == "") {
            make_msg("Note", "Please enter the question", "error");
        } else {
            if(showLoad.current) {
                showLoad.current.classList.remove("d-none");
            }

            if(showInput.current) {
                showInput.current.innerText = 'Processing ...';
            }

            if(showAns.current) {
                showAns.current.classList.add("d-none");
            }

            setTimeout(() => {
                if(showLoad.current) {
                    showLoad.current.classList.add("d-none");
                }

                if(showAns.current) {
                    showAns.current.classList.remove("d-none");
                    let msg = findBestMatch(message);
                    console.log(msg);
                    showAns.current.innerText = msg;
                }

                if(showInput.current) {
                    showInput.current.classList.remove("d-none");
                    showInput.current.innerText = message;
                }
            }, 1500);
        }
    }

    async function addFbSubmit(e) {
        e.preventDefault();
        let data_get = JSON.stringify({
            email: fb_email,
            username: fb_username,
            feedback: feedback
        })

        let req = await makeRequest("/api/add-feedback", data_get);
        make_msg("Note", req.msg, req.status);
    }

    useEffect(() => {
        let select_all = document.querySelectorAll(".section_holder i");
        select_all.forEach((d, k) => {
            d.onclick = (e) => {
                if(k === 0) {
                    document.querySelector(".box_one").classList.toggle("d-none");
                    document.querySelector(".box_two").classList.add("d-none");
                    document.querySelector(".box_").classList.toggle("Zindex_add");
                    return;
                } 

                if(k === 1) {
                    let a = document.createElement("a");
                    a.setAttribute("href" , `https://wa.me/15616673599?text=Hello! Hi Dear! How Can We Assist You?`);
                    a.setAttribute("target", "_blank");
                    a.click();
                    return;
                }
                
                if(k === 2) {
                    document.querySelector(".box_two").classList.toggle("d-none");
                    document.querySelector(".box_one").classList.add("d-none");
                    document.querySelector(".box_").classList.toggle("Zindex_add");
                    return;
                }
            }
        })
    }, []);

// Sample data
const trainingData = [
    { input: 'Hi' , output: 'Hello! How can I assist you with your immigration needs today?' },
    { input: 'How are you?' , output: 'Im doing well, thank you! How can I help you today?' },
    { input: 'Hello' , output: 'Hi there! What brings you here today?' },
    { input: 'Hellow' , output: 'Hi there! What brings you here today?' },
    { input: 'Good morning Good afternoon' , output: 'Good morning/afternoon! How can I make your day easier?' },
    { input: 'What is your name?' , output: 'Im your assistant, here to help with any immigration-related questions.' },
    { input: 'Thank you' , output: 'Youre welcome! Let me know if you have more questions.' },
    { input: 'Can I ask you something?' , output: 'Of course! Im here to help with any immigration-related questions.' },
    { input: 'Sorry' , output: 'No problem at all! How can I assist you?' },
    { input: 'Goodbye' , output: 'Goodbye! Feel free to reach out anytime. Have a great day!' },
    { input: 'Where are you located?' , output: 'Were located in Riviera Beach, Florida, but we can assist clients remotely as well.' },
    { input: 'How much do your services cost?' , output: 'Our pricing depends on the service. Please let us know what you need assistance with, and we can provide details.' },
    { input: 'What services do you offer?' , output: 'We assist with immigration document preparation, visa applications, green cards, citizenship, and more. How can we help you?' },
    { input: 'How long does the process take?' , output: 'Processing times vary depending on the type of application. Let us know what youre applying for, and we can give you an estimate.' },
    { input: 'Do you help with translations?' , output: 'Yes, we offer translation services for immigration documents at $40 per page.' },
    { input: 'Whats the first step to apply for a visa?' , output: 'The first step is to determine the type of visa you need and gather the required documents.' },
    { input: 'Can I speak to someone directly?' , output: 'Absolutely! Please provide your contact details, and someone from our team will reach out.' },
    { input: 'Do you handle asylum cases?' , output: 'Yes, we assist with asylum applications and related cases. Let us know how we can help.' },
    { input: 'How do I book an appointment?' , output: 'You can schedule an appointment by calling us at 561-667-3599 or sending us an email at info@narcissellc.com.' },
    { input: 'Can I apply for a green card without a sponsor?' , output: 'Yes, in some cases, such as EB-2 NIW or asylum, you may not need a sponsor. Let us know more about your situation.' },
    { input: "What are the basic steps to apply for a U.S. visa?", output: "The process generally involves completing an application form, gathering required documents, paying fees, and attending an interview at the U.S. embassy or consulate in your home country. Specific requirements vary by visa type." },
    { input: "How long does it typically take to process a visa application?", output: "Processing times vary depending on the visa type and your local U.S. embassy or consulate. On average, it can take several weeks to a few months." },
    { input: "What documents do I need to prepare for a visa application?", output: "Common documents include your passport, birth certificate, financial statements, and a completed application form. Some visas require additional documents, like a job offer or proof of family relationships." },
    { input: "How can I check the status of my immigration application?", output: "You can check the status online at the U.S. Citizenship and Immigration Services (USCIS) website using your case number." },
    { input: "How can I bring my spouse or children to the U.S.?", output: "You can file a petition for a family-based immigrant visa, such as an I-130 form. Once approved, your family members can apply for a visa at the U.S. embassy in their country." },
    { input: "What is the process for applying for a green card for family members?", output: "First, you must file a petition on behalf of your family member. After USCIS approves the petition, the National Visa Center will process the application and schedule an interview at the embassy or consulate." },
    { input: "How do I apply for Temporary Protected Status (TPS) as a Haitian?", output: "To apply for TPS, submit Form I-821 and any required documents showing you are eligible, such as proof of Haitian nationality and continuous U.S. residency." },
    { input: "How long will TPS be available for Haitians?", output: "TPS extensions depend on the U.S. governments decision. Keep updated on the USCIS website, as they will announce any extensions or terminations for TPS." },
    { input: "What documents do I need to apply for humanitarian parole for family members in Haiti?", output: "Youll need proof of family relationship, reasons for humanitarian need, and identity documents for the applicant and petitioner. Each case is reviewed based on its unique circumstances." },
    { input: "What types of work visas are available for the U.S.?", output: "Common work visas include the H-1B for skilled workers, the L-1 for company transfers, and the EB-2/EB-3 for skilled or professional immigrants seeking permanent residency." },
    { input: "How can I apply for an employment-based green card?", output: "Your employer must file a petition on your behalf, usually through the PERM labor certification process, followed by Form I-140." },
    { input: "What is the process for seeking asylum for Haitians in the U.S.?", output: "You must apply within one year of arriving in the U.S. by submitting Form I-589. An interview or hearing will determine if you qualify based on credible fear of persecution in Haiti." },
    { input: "Can my family in Haiti join me if I am granted asylum?", output: "Yes, once granted asylum, you can petition for certain family members to join you in the U.S. This includes your spouse and unmarried children under 21." },
    { input: "Do you provide translation services for Haitian Creole documents?", output: "Yes, we offer translation services for Haitian Creole to English, ensuring that all documents meet USCIS requirements." },
    { input: "Can you help me correct mistakes on my Haitian birth certificate or other documents?", output: "Yes, we can guide you through the process or connect you with professionals in Haiti to correct and notarize your documents." },
    { input: "How can I get a copy of my Haitian birth certificate if I dont have one?", output: "You may need to contact the Haitian National Archives or work with an agency in Haiti that specializes in retrieving official documents." },
    { input: "How much do your immigration services cost for Haitian clients?", output: "Our fees vary depending on the type of service. We offer competitive pricing and can discuss payment options during your consultation." },
    { input: "Do you offer payment plans for clients who need assistance?", output: "Yes, we understand that immigration costs can be high, so we offer flexible payment plans to help you manage the expenses." },
    { input: "What are the fees for filing immigration forms for family members in Haiti?", output: "Filing fees depend on the form. For example, the I-130 petition costs $625 online and $675 paper. Additional fees may apply for processing at the embassy." },
    { input: "Is it difficult for Haitians to get approved for a U.S. visa?", output: "Approval depends on various factors, including the type of visa, the applicants background, and the strength of supporting documents." },
    { input: "Why are immigration cases for Haitians often delayed?", output: "Delays can occur due to high demand, security checks, or limited resources at U.S. embassies. We advise clients to submit complete applications to avoid unnecessary delays." },
    { input: "What happens if I stay in the U.S. after my visa expires?", output: "Overstaying a visa can lead to penalties, including bans from re-entering the U.S. Its essential to apply for an extension or seek legal advice if your visa is expiring." },
    { input: "Do I have to give up my Haitian citizenship if I become a U.S. citizen?", output: "No, the U.S. allows dual citizenship, so you can keep your Haitian citizenship while becoming a U.S. citizen." },
    { input: "Can I still travel to Haiti frequently if I get a green card or become a U.S. citizen?", output: "Yes, as a U.S. green card holder or citizen, you can travel to Haiti, but green card holders must ensure they do not stay outside the U.S. for extended periods." },
    { input: "What are the fees for your immigration document preparation services?", output: "Our document preparation fees vary depending on the complexity of the case, with translation services starting at $40 per page." },
    { input: "How do I get started with an immigration consultation?", output: "You can contact us through our website or call our office to schedule an initial consultation to discuss your immigration needs." },
    { input: "What is your process for handling asylum cases?", output: "We start with an in-depth consultation to understand your case, help you gather evidence, and prepare you for interviews or hearings." },
    { input: "Do you assist with work permit applications?", output: "Yes, we can help you apply for or renew your work permit by completing the necessary forms and guiding you through the process." },
    { input: "How do I make an appointment with Narcisse Immigration Services?", output: "You can call us at 561-667-3599" },
    { input: "What happens if my spouse's visa application is denied?" , output: "If a visa application is denied, it could be due to missing documents or a lack of evidence. You will usually receive a letter explaining the reason and any steps you can take to address it, such as additional documentation or appeal options."},
    { input: "Can I sponsor my stepchildren from Haiti if I am a U.S. citizen?" , output: "Yes, U.S. citizens can sponsor their stepchildren as long as the marriage to the childs biological parent took place before the child turned 18. Youll need to file a separate I-130 petition for each stepchild."},
    { input: "What if my family members passport expired during the immigration process?" , output: "Your family member will need to renew their passport at the nearest Haitian consulate or embassy. A valid passport is required for visa issuance."},
    { input: "How can I help my family members in Haiti who were affected by recent political events?" , output: "In some cases, humanitarian parole may be available, allowing family members to enter the U.S. temporarily due to urgent circumstances. We can help you explore options."},
    { input: "How long does it take to get a green card for my parents from Haiti if I am a U.S. citizen?" , output: "On average, it may take 12-18 months, depending on case processing at USCIS and the U.S. Embassy in Haiti. Well help you track your case status and prepare for each stage."},
    { input: "Can I switch jobs while on a work visa in the U.S.?" , output: "It depends on your visa type. For example, H-1B visa holders can change employers, but a transfer application must be filed. Speak with an immigration professional before making job changes."},
    { input: "How can I get a work permit if I am applying for asylum?" , output: "After filing for asylum, you can apply for a work permit (Employment Authorization Document, or EAD) 150 days later. This allows you to work while waiting for an asylum decision."},
    { input: "Is there a visa for Haitian professionals with specialized skills?" , output: "Yes, the H-1B visa may be available if you have a job offer from a U.S. employer requiring specialized skills. For permanent residency, consider the EB-2 or EB-3 visa categories."},
    { input: "What happens if my work permit expires while waiting for my green card?" , output: "You can file for a work permit renewal as long as your green card application is pending. Its best to apply 90-120 days before your current work permit expires."},
    { input: "Can I get a job offer from a U.S. employer while in Haiti?" , output: "Yes, if you meet the job requirements, a U.S. employer can sponsor you for a work visa. We can help connect you with resources to find potential employers."},
    { input: "Can I travel outside the U.S. if my green card application is pending?" , output: "If you have filed for a green card while in the U.S., youll need an Advance Parole document to travel abroad. Without it, leaving the U.S. may be considered abandonment of your application."},
    { input: "Can I apply for a green card if I overstayed my visa?" , output: "It may be possible to adjust your status if youre married to a U.S. citizen or have other qualifying relatives. We can assess your eligibility and help guide you through the process."},
    { input: "What should I do if I lost my green card?" , output: "You must file Form I-90 to replace your lost green card. While waiting for the replacement, you may need to carry proof of your status, such as a passport with a green card stamp."},
    { input: "What are the benefits of becoming a U.S. permanent resident (green card holder)?" , output: "Benefits include the right to live and work permanently in the U.S., eligibility for certain government benefits, and a pathway to U.S. citizenship after five years."},
    { input: "Can I apply for citizenship if I have had my green card for three years?" , output: "If you are married to a U.S. citizen and meet the residency requirements, you may be eligible to apply for naturalization after three years. Otherwise, the standard waiting period is five years."},
    { input: "Can I travel with TPS status?" , output: "Yes, but you must apply for Advance Parole before leaving the U.S. to ensure you can re-enter. Traveling without Advance Parole may affect your TPS status"},
    { input: "Is it possible to apply for another immigration status while on TPS?" , output: "Yes, if you qualify for another status, such as through family sponsorship, you may apply for adjustment. TPS does not bar you from pursuing other immigration options."},
    { input: "What happens if my TPS application is denied?" , output: "If your TPS application is denied, you will typically receive a letter explaining the reason. You may appeal or reapply if eligible. We can assist with your options."},
    { input: "Can I apply for a work permit with TPS?" , output: "Yes, TPS holders are eligible for a work permit. Submit Form I-765 to USCIS to obtain authorization to work legally in the U.S."},
    { input: "How do I know when its time to renew my TPS?" , output: "USCIS typically announces TPS extensions several months in advance. Its essential to keep updated with official announcements and apply promptly during the re-registration period."},
    { input: "Can I use a notarized document from Haiti in my immigration application?" , output: "Yes, notarized documents from Haiti can be used if they are translated into English and certified. Our team can assist with certified translations."},
    { input: "How can I retrieve my marriage certificate from Haiti if I lost it?" , output: "You may need to contact the local registry in Haiti where the marriage was registered or engage a local representative to obtain a certified copy on your behalf."},
    { input: "Do my childrens school records from Haiti need to be translated for their visa application?" , output: "Yes, all non-English documents submitted to USCIS must be translated and certified. We offer translation services to ensure your documents meet immigration standards."},
    { input: "Can I submit a copy of my Haitian passport instead of the original?" , output: "Yes, you can generally submit a copy of your passport, but it must be a complete and clear copy. Originals may be required at certain stages or interviews."},
    { input: "Can I apply for a visa to visit my sick relative in the U.S.?" , output: "You can apply for a B-2 visitor visa for medical emergencies, but you must demonstrate that you will return to Haiti afterward. Providing a letter from your relatives doctor may strengthen your application."},
    { input: "What options are available for Haitian children without parents to immigrate to the U.S.?" , output: "Orphaned children may be eligible for adoption-based immigration or humanitarian parole. These cases are complex, so consult with an immigration professional to understand the options."},
    { input: "Can I petition for my child who was born in the Dominican Republic?" , output: "Yes, as long as you can establish a parental relationship. Birth certificates or legal documentation proving the relationship will be required."},
    { input: "Is there an age limit for children I can sponsor as a U.S. citizen?" , output: "U.S. citizens can petition for unmarried children of any age, but for immediate processing, the child should be under 21. Children over 21 fall into a different preference category, which has longer waiting times."},
    { input: "My child is a U.S. citizen. Can they petition for me if I am undocumented?" , output: "Yes, once your child turns 21, they can petition for you. Being undocumented may affect your ability to adjust status from within the U.S., so seek professional advice to understand your options."},
    { input: "Do you provide support with filling out immigration forms?" , output: "Yes, we offer comprehensive form preparation services to ensure accuracy and compliance with USCIS requirements."},
    { input: "Can you help with immigration cases that involve complex documentation?" , output: "Absolutely, our team is experienced in handling complex cases that require detailed documentation and special care to meet legal standards."},
    { input: "How do I contact you to schedule an appointment for consultation?" , output: "You can contact us via phone at 561-667-3599 or email at info@narcissellc.com. We will be happy to schedule a time that works for you."},
    { input: "What type of immigration cases do you specialize in?" , output: "We specialize in family reunification, humanitarian relief, asylum, TPS, and document preparation. Our services are tailored to the Haitian community and beyond."},
    { input: "Can you assist with translations and document corrections for Haitian documents?" , output: "Yes, we provide certified translation services and can guide you through the process of correcting errors on Haitian documents, like birth certificates and passports."},
    { input: "What is an immigration consultant/document preparer?" , output: "An immigration consultant or document preparer helps clients prepare and organize immigration forms and applications without providing legal advice."},
    { input: "Do I need a lawyer for my immigration case?" , output: "It depends. While some cases may require legal representation, others, like basic form preparation, can be handled by an experienced document preparer."},
    { input: "Can you help me determine which visa I qualify for?" , output: "Yes, we can help guide you based on your goals, such as work, study, or family sponsorship."},
    { input: "How much is the USCIS filing fee?" , output: "Fees vary depending on the application."},
    { input: "What happens after I submit my application?" , output: "USCIS will review it, send a receipt notice, and may request more evidence or schedule an interview."},
    { input: "Can I sponsor my parents for a green card?" , output: "Yes, U.S. citizens who are at least 21 years old can sponsor their parents."},
    { input: "Can a green card holder sponsor their spouse?" , output: "Yes, green card holders can sponsor their spouse, but processing times may be longer than for U.S. citizens."},
    { input: "How long does it take to bring my spouse to the U.S.?" , output: "Processing times vary based on your immigration status and the country where your spouse resides."},
    { input: "Can I sponsor my sibling?" , output: "U.S. citizens can sponsor siblings, but this category often has the longest wait times."},
    { input: "What if I don’t meet the income requirement to sponsor a family member?" , output: "You can use a joint sponsor who meets the income requirement to help with the Affidavit of Support."},
    { input: "What is the H-1B visa?" , output: "The H-1B is a work visa for skilled professionals sponsored by a U.S. employer."},
    { input: "Can I work while on a tourist visa?" , output: "No, working on a tourist visa is prohibited and could lead to serious consequences."},
    { input: "How do I find a job sponsor in the U.S.?" , output: "Research U.S. companies in your field and apply for jobs. Some companies offer visa sponsorship for qualified candidates."},
    { input: "What is premium processing?" , output: "Premium processing is an expedited service for certain visa petitions, providing decisions within 15 days for an additional fee."},
    { input: "What is an Employment Authorization Document (EAD)?" , output: "An EAD is a work permit that allows certain immigrants to work legally in the U.S."},
    { input: "How do I apply for a student visa (F-1)?" , output: "First, apply to a SEVP-certified school, then pay the SEVIS fee, and finally apply for a visa at a U.S. embassy or consulate."},
    { input: "Can I work while on an F-1 visa?" , output: "Yes, but only under specific conditions, such as on-campus employment or Optional Practical Training (OPT)"},
    { input: "What happens if I stop attending school on an F-1 visa?" , output: "You may lose your legal status and could face removal from the U.S."},
    { input: "Can I change my status from a student visa to a work visa?" , output: "Yes, if you find a job and your employer sponsors you, you can apply to change your status."},
    { input: "Can I bring my family on a student visa?" , output: "Yes, dependents can apply for F-2 visas to accompany you."},
    { input: "What is Temporary Protected Status (TPS)?" , output: "TPS provides temporary protection for individuals from countries experiencing unsafe conditions, allowing them to live and work in the U.S."},
    { input: "Can I apply for asylum after being in the U.S. for over a year?" , output: "Generally, you must apply within one year, but exceptions exist for changed or extraordinary circumstances."},
    { input: "What is VAWA?" , output: "VAWA allows certain abused spouses, children, and parents of U.S. citizens or green card holders to self-petition for immigration benefits."},
    { input: "Can I apply for a green card through DACA?" , output: "DACA itself doesnt lead to a green card, but some recipients may qualify through marriage or employment."},
    { input: "What is humanitarian parole?" , output: "Humanitarian parole allows individuals to enter the U.S. temporarily for urgent humanitarian reasons."},
    { input: "How do I apply for U.S. citizenship?" , output: "File Form N-400 and meet requirements like continuous residence, physical presence, and passing the citizenship test."},
    { input: "What happens if I fail the citizenship test?" , output: "Youll have one more chance to retake the failed portion of the test"},
    { input: "Can I apply for citizenship if I owe taxes?" , output: "Yes, but you must show proof of a payment plan or resolution with the IRS."},
    { input: "How long does it take to become a U.S. citizen?" , output: "On average, it takes 8–12 months, depending on your case and local processing times."},
    { input: "Can I have dual citizenship?" , output: "The U.S. allows dual citizenship, but some countries may not. Check with your home countrys laws."},
    { input: "What documents do I need for my immigration interview?" , output: "Bring your appointment notice, ID, passport, original documents, and any requested evidence."},
    { input: "Can I travel while my green card application is pending?" , output: "Yes, but only with an approved Advance Parole document."},
    { input: "What is the affidavit of support?" , output: "Its a document showing the petitioner can financially support the immigrant."},
    { input: "What does “out of status” mean?" , output: "It means your visa or authorized stay has expired, and you are no longer legally in the U.S."},
    { input: "Can I get a green card if Ive been deported before?" , output: "Its possible, but youll need a waiver and must meet specific requirements."}
  ];
  
  // Preprocess data
  function preprocess(text) {
    return text.toLowerCase().split(/\W+/).filter(word => word.length > 0);
  }
  
  // Build vocabulary
  const vocabulary = Array.from(new Set(trainingData.flatMap(item => preprocess(item.input))));
  function calculateIDF(data) {
    const idf = {};
    const numDocuments = data.length;
    vocabulary.forEach(term => {
      const docCount = data.filter(item => preprocess(item.input).includes(term)).length;
      idf[term] = Math.log(numDocuments / (1 + docCount));
    });
    return idf;
  }
  
  const idf = calculateIDF(trainingData);
//   console.log(idf)
  
  // Convert sentence to TF-IDF vector
  function toTFIDFVector(sentence) {
    const words = preprocess(sentence);
    const tfidfVector = vocabulary.map(term => {
      const tf = words.filter(word => word === term).length / words.length;
      return tf * (idf[term] || 0);
    });
    return tfidfVector;
  }
  
  // Calculate cosine similarity
  function cosineSimilarity(vecA, vecB) {
    const dotProduct = vecA.reduce((sum, val, index) => sum + val * vecB[index], 0);
    const magnitudeA = Math.sqrt(vecA.reduce((sum, val) => sum + val * val, 0));
    const magnitudeB = Math.sqrt(vecB.reduce((sum, val) => sum + val * val, 0));
    return dotProduct / (magnitudeA * magnitudeB);
  }
  
  // Function to find the best matching answer
  function findBestMatch(question) {
    const questionVector = toTFIDFVector(question);
    let bestMatchIndex = -1;
    let highestSimilarity = -1;
  
    trainingData.forEach((item, index) => {
      const itemVector = toTFIDFVector(item.input);
      const similarity = cosineSimilarity(questionVector, itemVector);
      if (similarity > highestSimilarity) {
        highestSimilarity = similarity;
        bestMatchIndex = index;
      }
    });
  
    return bestMatchIndex !== -1 ? trainingData[bestMatchIndex].output : "No relevant answer found.";
  }
  
    // Test the function
    //   const inputQuestion = "documents do I need to prepare for a visa application";
    //   console.log("Input:", inputQuestion);
    //   console.log("Best Answer:", findBestMatch(inputQuestion));
      
    return (
        <>
        <div className="col-12 bg-skin">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-5 col-md-6 col-sm-6 col-12">
                        <div className="p-3">
                            <Image
                                src={footer_logo}
                                width="500"
                                height="500"
                                className="mb-3 logo_set"
                                loading="lazy"
                                alt="footer logo"
                            />
                            <h3 className="fs-5 fw-normal mb-2 lh-base">{pathname.includes("hc") ? "Immigration Sisters pa yon kabinè avoka, e li pa ap aji kòm avoka ou. Sèvis preparasyon dokiman legal ak enfòmasyon sa a pa ranplase konsèy yon avoka. Nou pa ka bay konsèy legal e nou ka sèlman bay sèvis otosèvis dapre direksyon espesifik ou. Nou pa otorize pou pratike lalwa. Nou entèdi bay nenpòt kalite konsèy, eksplikasyon, opinyon, oswa rekòmandasyon bay yon konsomatè sou posib dwa legal, remèd, defans, opsyon, seleksyon fòm oswa estrateji. Nou pa predi rezilta epi nou pa responsab pou konnen si dokiman ou yo ase legalman oswa ou pa." : pathname.includes("es") ? "Immigration Sisters no es un bufete de abogados y no actúa como su abogado. Este servicio de preparación de documentos informativos y legales no sustituye el asesoramiento de un abogado. No podemos proporcionar asesoramiento legal y solo podemos proporcionar servicios de autoayuda según su dirección específica. No estamos autorizados a ejercer la abogacía. Está prohibido que proporcionemos cualquier tipo de consejo, explicación, opinión o recomendación a un consumidor sobre posibles derechos legales, remedios, defensas, opciones, selección de formularios o estrategias. No predecimos resultados y no tenemos responsabilidad de saber si sus documentos son legalmente suficientes o no." : "Immigration Sisterers is not law firm, and is not acting as your attorney. This informational and legal document preparation service is not a substitute for the advice of an attorney. We cannot provide legal advice and can only provide self-help services at your specific direction. We are not permitted to engage in the practice of law. We are prohibited from providing any kind of advice, explanation, opinion, or recommendation to a consumer about possible legal rights, remedies, defenses, options, selection of forms or strategies. We do not predict outcomes and have no responsibility to know whether your documents are legally sufficient or not."}</h3>
                            <div className="d-flex gap-3 mt-3">
                                <i className="btn border-brown btn-md bi bi-instagram"></i>
                                <i className="btn border-brown btn-md bi bi-facebook"></i>
                                <i className="btn border-brown btn-md bi bi-threads"></i>
                                <i className="btn border-brown btn-md bi bi-twitter"></i>
                                <i className="btn border-brown btn-md bi bi-youtube"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-md-6 col-sm-6 col-12 py-4 d-flex justify-content-start justify-content-sm-start justify-content-md-center justify-content-lg-center justify-content-xl-center">
                        <div className="mt-3 d-flex flex-column px-3">
                            <h3 className="fs-3 fw-bold lh-base mb-2">{router.pathname.includes("hc") ? "Lyens Itil" : router.pathname.includes("es") ? "Enlaces Útiles" : "Useful Links"}</h3>
                            <Link href={pathname.includes("hc") ? "/hc/about-us" : pathname.includes("es") ? "/es/about-us" : "/about-us"} className="fs-5 text-brown text-decoration-none lh-base mb-2 col-12">{pathname.includes("hc") ? "Sou Nou" : pathname.includes("es") ? "Sobre Nosotros" : "About Us"}</Link>
                            <Link href={pathname.includes("hc") ? "/hc/contact-us" : pathname.includes("es") ? "/es/contact-us" : "/contact-us"} className="fs-5 text-brown text-decoration-none lh-base mb-2 col-12">{pathname.includes("hc") ? "Kontakte Nou" : pathname.includes("es") ? "Contáctanos" : "Contact Us"}</Link>
                            <Link href={pathname.includes("hc") ? "/hc/support" : pathname.includes("es") ? "/es/support" : "/support"} className="fs-5 text-brown text-decoration-none lh-base mb-2 col-12">{pathname.includes("hc") ? "Sipò" : pathname.includes("es") ? "Soporte" : "Support"}</Link>
                            <Link href={pathname.includes("hc") ? "/hc/terms-of-service" : pathname.includes("es") ? "/es/terms-of-service" : "/terms-of-service"} className="fs-5 text-brown text-decoration-none lh-base mb-2 col-12">{pathname.includes("hc") ? "Tèm Sèvis" : pathname.includes("es") ? "Términos de Servicio" : "Terms of service"}</Link>
                            <Link href='/blog' className="fs-5 text-brown text-decoration-none lh-base mb-2 col-12">Blog</Link>
                        </div>
                    </div>
                </div>
                <div className="px-3 py-3">
                    <h4 className="fs-4 lh-base">&copy; All Rights Reserved <b>The Immigration Sistsers</b> 2024</h4>
                </div>
            </div>
        </div>
        <div className="position-fixed box_ d-flex justify-content-end align-items-end" style={{top: '0%', left: '1%', bottom: '1%'}}>
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={addFbSubmit} className="d-none box_one form-group p-3 bg-shadow-sm bg-white rounded">
                            <input type="text" className="form-control mb-3" placeholder="email username" autoComplete="off" spellCheck="off" value={fb_username} onChange={(e) => set_fb_username(e.target.value || null)} />
                            <input type="email" className="form-control mb-3" placeholder="email address" autoComplete="off" spellCheck="off" value={fb_email} onChange={(e) => set_fb_email(e.target.value || null)} />
                            <textarea type="text" rows="4" cols="10" className="form-control mb-3" placeholder="feedback" autoComplete="off" spellCheck="off" value={feedback} onChange={(e) => set_feedback(e.target.value || null)} />
                            <button className="btn bg-purple btn-md">Submit</button>
                        </form>
                        <div style={{height: '400px', overflowY: 'scroll'}} className="d-none box_two form-group p-3 bg-shadow-sm bg-white rounded col-xl-5 col-md-6 col-sm-10 col-12">
                            <h3 className="fs-5 lh-base mb-2">Chat With AI Assitant</h3>
                            <div className="row justify-content-between mb-3 position-relative">
                                <div className="col-10">
                                    <div className="p-2 mt-1">
                                        <h4 className="fs-6 lh-base mb-2">Ai</h4>
                                        <h4 ref={showAns} className="fs-6 lh-base mb-2">Hi Dear! How Can i Assist You</h4>
                                        <h4 ref={showLoad} className="fs-6 lh-base mb-2 d-none"><i className="bi bi-arrow-repeat"></i> Ai is thinking on your question ...</h4>
                                    </div>
                                </div>
                                <div className="col-10 pt-5 d-flex justify-content-end align-items-end">
                                    <div className="p-2 mt-1">
                                        <h4 className="fs-6 lh-base mb-2">You</h4>
                                        <h4 ref={showInput} className="fs-6 lh-base mb-2">Type Anything to start chatting with our powerful AI Assistant ?</h4>
                                    </div>
                                </div>
                                <div className="position-sticky" style={{top: '90%', bottom: '1', left: '0%', height:'100%', width: '100%'}}>
                                    <input type="text" className="form-control p-3 mb-3" placeholder="Ask Question to Our AI Bot" autoComplete="off" spellCheck="false" onChange={(e) => handleMessage(e.target.value || null)} />
                                    <button onClick={addMsgClick} className="btn bg-purple btn-md">Send</button>
                                </div>
                            </div>
                        </div>
                        <div className="gap-3 d-flex mt-4 justify-content-start section_holder">
                            <i className="bi bi-chat bg-shadow-sm bg-white p-3 rounded fs-3 addHoverColor"></i>
                            <i className="bi bi-whatsapp bg-shadow-sm bg-white p-3 rounded fs-3 addHoverColor"></i>
                            <i className="bi bi-robot bg-shadow-sm bg-white p-3 rounded fs-3 addHoverColor"></i>
                        </div>
                                                
                        <a className="contact_us_btn" target="_blank" data-stringify-link="https://app.docketwise.com/firm_leads/public_new?uuid=22767686-7fab-4ffe-b2e2-5cb8bc563881" delay="150" data-sk="tooltip_parent" href="https://app.docketwise.com/firm_leads/public_new?uuid=22767686-7fab-4ffe-b2e2-5cb8bc563881" rel="noopener noreferrer">Contact Us</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;