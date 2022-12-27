import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "navbar": {
      "callbacks": {}
    },
    "navwrap": {
      "callbacks": {}
    },
    "navlogo": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "navmenu": {
      "callbacks": {}
    },
    "contact": {
      "callbacks": {}
    },
    "contactflex": {
      "callbacks": {}
    },
    "container1": {
      "callbacks": {}
    },
    "containerwrap": {
      "callbacks": {}
    },
    "containbody": {
      "callbacks": {}
    },
    "containhead": {
      "callbacks": {}
    },
    "heading": {
      "callbacks": {}
    },
    "paragraphwrap": {
      "callbacks": {}
    },
    "buttonwrap": {
      "callbacks": {}
    },
    "buttoninline": {
      "callbacks": {}
    },
    "upperbutton": {
      "callbacks": {}
    },
    "downbutton": {
      "callbacks": {}
    },
    "linkinline": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://atrilabs.com/",
              "target": "_self"
            }
          }
        ]
      }
    },
    "bodyimgwrap": {
      "callbacks": {}
    },
    "trustedbysection": {
      "callbacks": {}
    },
    "trustedbywrap": {
      "callbacks": {}
    },
    "trustedlogocontain": {
      "callbacks": {}
    },
    "servicessection": {
      "callbacks": {}
    },
    "serviceswrap": {
      "callbacks": {}
    },
    "servicesubheadwrap": {
      "callbacks": {}
    },
    "servicessubheadtextwrap": {
      "callbacks": {}
    },
    "servicesheadwrap": {
      "callbacks": {}
    },
    "servicesgrid": {
      "callbacks": {}
    },
    "servicesgridwrap1": {
      "callbacks": {}
    },
    "serviceitemiconwrap": {
      "callbacks": {}
    },
    "serviceitemheadwrap": {
      "callbacks": {}
    },
    "serviceitemparawrap": {
      "callbacks": {}
    },
    "servicepointerwrap": {
      "callbacks": {}
    },
    "servicepointeritem1": {
      "callbacks": {}
    },
    "servicepointerflex1": {
      "callbacks": {}
    },
    "servicepointertextdiv1": {
      "callbacks": {}
    },
    "servicepointeritem2": {
      "callbacks": {}
    },
    "servicepointerflex2": {
      "callbacks": {}
    },
    "servicepointertextdiv2": {
      "callbacks": {}
    },
    "servicepointeritem3": {
      "callbacks": {}
    },
    "servicepointerflex3": {
      "callbacks": {}
    },
    "servicepointertextdiv3": {
      "callbacks": {}
    },
    "servicesgridwrap2": {
      "callbacks": {}
    },
    "servicepointerwrapmid": {
      "callbacks": {}
    },
    "servicepointeritem3mid": {
      "callbacks": {}
    },
    "Flex50": {
      "callbacks": {}
    },
    "Div51": {
      "callbacks": {}
    },
    "servicepointeritem2mid": {
      "callbacks": {}
    },
    "Flex51": {
      "callbacks": {}
    },
    "Div52": {
      "callbacks": {}
    },
    "servicepointeritem1mid": {
      "callbacks": {}
    },
    "servicepointerflex1mid": {
      "callbacks": {}
    },
    "servicepointertextdiv1mid": {
      "callbacks": {}
    },
    "serviceitemparawrapmid": {
      "callbacks": {}
    },
    "serviceitemheadwrapmid": {
      "callbacks": {}
    },
    "serviceitemiconwrapmid": {
      "callbacks": {}
    },
    "servicesgridwrap3": {
      "callbacks": {}
    },
    "servicepointerwrapbot": {
      "callbacks": {}
    },
    "servicepointeritem3bot": {
      "callbacks": {}
    },
    "Flex57": {
      "callbacks": {}
    },
    "Div61": {
      "callbacks": {}
    },
    "servicepointeritem2bot": {
      "callbacks": {}
    },
    "Flex58": {
      "callbacks": {}
    },
    "Div62": {
      "callbacks": {}
    },
    "servicepointeritem1bot": {
      "callbacks": {}
    },
    "servicepointerflex1bot": {
      "callbacks": {}
    },
    "servicepointertextdiv1bot": {
      "callbacks": {}
    },
    "serviceitemparawrapbot": {
      "callbacks": {}
    },
    "serviceitemheadwrapbot": {
      "callbacks": {}
    },
    "serviceitemiconwrapbot": {
      "callbacks": {}
    },
    "casestudysection": {
      "callbacks": {}
    },
    "wrapcasestudy": {
      "callbacks": {}
    },
    "casestudyheadwrap": {
      "callbacks": {}
    },
    "casestudyheadtextdiv": {
      "callbacks": {}
    },
    "projectsbuttoninline": {
      "callbacks": {}
    },
    "projectsdownbutton": {
      "callbacks": {}
    },
    "projectsupperbutton": {
      "callbacks": {}
    },
    "wrapprojectslider": {
      "callbacks": {}
    },
    "projectsectionslider": {
      "callbacks": {}
    },
    "projectslidermask": {
      "callbacks": {}
    },
    "projectsectionslide1": {
      "callbacks": {}
    },
    "projectslidelinkblock1": {
      "callbacks": {}
    },
    "projectslideimagewrap1": {
      "callbacks": {}
    },
    "projectslidecontent1": {
      "callbacks": {}
    },
    "projectslideheadwrap1": {
      "callbacks": {}
    },
    "projectslidetagwrap1": {
      "callbacks": {}
    },
    "viewprojectdiv1": {
      "callbacks": {}
    },
    "viewprojectarrowwrap1": {
      "callbacks": {}
    },
    "projectsectionslide4": {
      "callbacks": {}
    },
    "projectslidelinkblock4": {
      "callbacks": {}
    },
    "projectslidecontent4": {
      "callbacks": {}
    },
    "viewprojectdiv4": {
      "callbacks": {}
    },
    "viewprojectarrowwrap4": {
      "callbacks": {}
    },
    "projectslidetagwrap4": {
      "callbacks": {}
    },
    "projectslideheadwrap4": {
      "callbacks": {}
    },
    "projectslideimagewrap4": {
      "callbacks": {}
    },
    "projectsectionslide5": {
      "callbacks": {}
    },
    "projectslidelinkblock5": {
      "callbacks": {}
    },
    "projectslidecontent5": {
      "callbacks": {}
    },
    "viewprojectdiv5": {
      "callbacks": {}
    },
    "viewprojectarrowwrap5": {
      "callbacks": {}
    },
    "projectslidetagwrap5": {
      "callbacks": {}
    },
    "projectslideheadwrap5": {
      "callbacks": {}
    },
    "projectslideimagewrap5": {
      "callbacks": {}
    },
    "projectsectionslide2": {
      "callbacks": {}
    },
    "projectslidelinkblock2": {
      "callbacks": {}
    },
    "projectslidecontent2": {
      "callbacks": {}
    },
    "viewprojectdiv2": {
      "callbacks": {}
    },
    "viewprojectarrowwrap2": {
      "callbacks": {}
    },
    "projectslidetagwrap2": {
      "callbacks": {}
    },
    "projectslideheadwrap2": {
      "callbacks": {}
    },
    "projectslideimagewrap2": {
      "callbacks": {}
    },
    "projectsectionslide3": {
      "callbacks": {}
    },
    "projectslidelinkblock3": {
      "callbacks": {}
    },
    "projectslidecontent3": {
      "callbacks": {}
    },
    "viewprojectdiv3": {
      "callbacks": {}
    },
    "viewprojectarrowwrap3": {
      "callbacks": {}
    },
    "projectslidetagwrap3": {
      "callbacks": {}
    },
    "projectslideheadwrap3": {
      "callbacks": {}
    },
    "projectslideimagewrap3": {
      "callbacks": {}
    },
    "projectsliderleftarrow": {
      "callbacks": {}
    },
    "projectsliderleftarrowiconwrap": {
      "callbacks": {}
    },
    "projectsliderrightarrow": {
      "callbacks": {}
    },
    "projectsliderrightarrowiconwrap": {
      "callbacks": {}
    },
    "blogsection": {
      "callbacks": {}
    },
    "wrapbloghomepage": {
      "callbacks": {}
    },
    "blogheadsubtextwrap": {
      "callbacks": {}
    },
    "blogsubtextwrap": {
      "callbacks": {}
    },
    "blogheadingwrap": {
      "callbacks": {}
    },
    "blogitemarticlewrap": {
      "callbacks": {}
    },
    "blogitemarticletextwrap": {
      "callbacks": {}
    },
    "blogitemarrowwrap": {
      "callbacks": {}
    },
    "blogcontentwrap": {
      "callbacks": {}
    },
    "blogsectionlist": {
      "callbacks": {}
    },
    "bloghsectionlistitem1": {
      "callbacks": {}
    },
    "blogsectionblogitemwrap": {
      "callbacks": {}
    },
    "blogitemreadarticlewrap": {
      "callbacks": {}
    },
    "blogitemarrowwrapwhite": {
      "callbacks": {}
    },
    "blogitemreadarticletextwrap": {
      "callbacks": {}
    },
    "blogitemheadingwrap": {
      "callbacks": {}
    },
    "blogitemdatetimewrap": {
      "callbacks": {}
    },
    "blogitemdatewrap": {
      "callbacks": {}
    },
    "blogitemtimewrap": {
      "callbacks": {}
    },
    "bloghsectionlistitem2n": {
      "callbacks": {}
    },
    "blogsectionblogitemwrap2": {
      "callbacks": {}
    },
    "blogitemdatetimewrap2": {
      "callbacks": {}
    },
    "blogitemtimewrap2": {
      "callbacks": {}
    },
    "blogitemdatewrap2nd": {
      "callbacks": {}
    },
    "blogitemheadingwrap2": {
      "callbacks": {}
    },
    "blogitemreadarticlewrap2": {
      "callbacks": {}
    },
    "blogitemreadarticletextwrap2": {
      "callbacks": {}
    },
    "blogitemarrowwrapwhite2": {
      "callbacks": {}
    },
    "bloghsectionlistitem": {
      "callbacks": {}
    },
    "blogsectionblogitemwrap3": {
      "callbacks": {}
    },
    "blogitemdatewrap3rd": {
      "callbacks": {}
    },
    "blogitemtimewrap3": {
      "callbacks": {}
    },
    "blogitemdatewrap3": {
      "callbacks": {}
    },
    "blogitemheadingwrap3": {
      "callbacks": {}
    },
    "blogitemreadarticlewrap3": {
      "callbacks": {}
    },
    "blogitemreadarticletextwrap3": {
      "callbacks": {}
    },
    "blogitemarrowwrapwhite3": {
      "callbacks": {}
    },
    "bloghsectionlistitem4": {
      "callbacks": {}
    },
    "blogsectionblogitemwrap4": {
      "callbacks": {}
    },
    "blogitemdatetimewrap4": {
      "callbacks": {}
    },
    "blogitemtimewrap4": {
      "callbacks": {}
    },
    "blogitemdatewrap4th": {
      "callbacks": {}
    },
    "blogitemheadingwrap4": {
      "callbacks": {}
    },
    "blogitemreadarticlewrap4": {
      "callbacks": {}
    },
    "blogitemreadarticletextwrap4": {
      "callbacks": {}
    },
    "blogitemarrowwrapwhite4": {
      "callbacks": {}
    },
    "bloghsectionlistitem5": {
      "callbacks": {}
    },
    "blogsectionblogitemwrap5": {
      "callbacks": {}
    },
    "blogitemdatetimewrap5": {
      "callbacks": {}
    },
    "blogitemtimewrap5": {
      "callbacks": {}
    },
    "blogitemdatewrap5th": {
      "callbacks": {}
    },
    "blogitemheadingwrap5": {
      "callbacks": {}
    },
    "blogitemreadarticlewrap5": {
      "callbacks": {}
    },
    "blogitemreadarticletextwrap5": {
      "callbacks": {}
    },
    "blogitemarrowwrapwhite5": {
      "callbacks": {}
    },
    "aboutsection": {
      "callbacks": {}
    },
    "wrapperabout": {
      "callbacks": {}
    },
    "aboutheadsubtextwrap": {
      "callbacks": {}
    },
    "aboutsubtextwrap": {
      "callbacks": {}
    },
    "aboutheadingwrap": {
      "callbacks": {}
    },
    "aboutcontentwrap": {
      "callbacks": {}
    },
    "wrapperlightbox": {
      "callbacks": {}
    },
    "aboutimage1": {
      "callbacks": {}
    },
    "aboutimage2": {
      "callbacks": {}
    },
    "aboutimage3": {
      "callbacks": {}
    },
    "aboutimage4": {
      "callbacks": {}
    },
    "experiencesection": {
      "callbacks": {}
    },
    "wrapperexperience": {
      "callbacks": {}
    },
    "experienceleftwrapper": {
      "callbacks": {}
    },
    "experienceheadingwrapper": {
      "callbacks": {}
    },
    "experienceitemscontainer": {
      "callbacks": {}
    },
    "experienceitemwrapperinline1": {
      "callbacks": {}
    },
    "experiencegreybottomborder1": {
      "callbacks": {}
    },
    "experiencearrowtimewrap1": {
      "callbacks": {}
    },
    "experiencetimeperiodwrap1": {
      "callbacks": {}
    },
    "experiencearrowwrapper1": {
      "callbacks": {}
    },
    "experienceitemheadsubheadwrap1": {
      "callbacks": {}
    },
    "experienceitemheadingwrap1": {
      "callbacks": {}
    },
    "experienceitemsubheadingwrap1": {
      "callbacks": {}
    },
    "experienceitemwrapperinline2": {
      "callbacks": {}
    },
    "experiencegreybottomborder2": {
      "callbacks": {}
    },
    "experienceitemheadsubheadwrap2": {
      "callbacks": {}
    },
    "experienceitemheadingwrap2": {
      "callbacks": {}
    },
    "experienceitemsubheadingwrap2": {
      "callbacks": {}
    },
    "experiencearrowtimewrap2": {
      "callbacks": {}
    },
    "experiencetimeperiodwrap2": {
      "callbacks": {}
    },
    "experiencearrowwrapper2": {
      "callbacks": {}
    },
    "experienceitemwrapperinline3": {
      "callbacks": {}
    },
    "experienceitemheadsubheadwrap3": {
      "callbacks": {}
    },
    "experienceitemheadingwrap3": {
      "callbacks": {}
    },
    "experienceitemsubheadingwrap3": {
      "callbacks": {}
    },
    "experiencegreybottomborder3": {
      "callbacks": {}
    },
    "experiencearrowtimewrap3": {
      "callbacks": {}
    },
    "experiencetimeperiodwrap3": {
      "callbacks": {}
    },
    "experiencearrowwrapper3": {
      "callbacks": {}
    },
    "experiencerightwrapper": {
      "callbacks": {}
    },
    "workexperienceheadingwrapper": {
      "callbacks": {}
    },
    "workexperienceitemscontainer": {
      "callbacks": {}
    },
    "wexperienceitemwrapperinline3": {
      "callbacks": {}
    },
    "wexperiencearrowtimewrap3": {
      "callbacks": {}
    },
    "wexperiencearrowwrapper3": {
      "callbacks": {}
    },
    "wexperiencetimeperiodwrap3": {
      "callbacks": {}
    },
    "wexperiencegreybottomborder3": {
      "callbacks": {}
    },
    "wexperienceicondetailswrap3": {
      "callbacks": {}
    },
    "wexperienceiconwrap3": {
      "callbacks": {}
    },
    "wexperiencedetailscontain3": {
      "callbacks": {}
    },
    "wexperienceitemsubheadingwrap3": {
      "callbacks": {}
    },
    "wexperienceitemheadingwrap3": {
      "callbacks": {}
    },
    "wexperienceitemwrapperinline2": {
      "callbacks": {}
    },
    "wexperiencearrowtimewrap2": {
      "callbacks": {}
    },
    "wexperiencearrowwrapper2": {
      "callbacks": {}
    },
    "wexperiencetimeperiodwrap2": {
      "callbacks": {}
    },
    "wexperiencegreybottomborder2": {
      "callbacks": {}
    },
    "wexperienceicondetailswrap2": {
      "callbacks": {}
    },
    "wexperienceiconwrap2": {
      "callbacks": {}
    },
    "wexperiencedetailscontain2": {
      "callbacks": {}
    },
    "wexperienceitemsubheadingwrap2": {
      "callbacks": {}
    },
    "wexperienceitemheadingwrap2": {
      "callbacks": {}
    },
    "wexperienceitemwrapperinline1": {
      "callbacks": {}
    },
    "wexperiencearrowtimewrap1": {
      "callbacks": {}
    },
    "wexperiencearrowwrapper1": {
      "callbacks": {}
    },
    "wexperiencetimeperiodwrap1": {
      "callbacks": {}
    },
    "wexperiencegreybottomborder1": {
      "callbacks": {}
    },
    "wexperienceicondetailswrap1": {
      "callbacks": {}
    },
    "wexperiencedetailscontain1": {
      "callbacks": {}
    },
    "wexperienceitemheadingwrap1": {
      "callbacks": {}
    },
    "wexperienceitemsubheadingwrap1": {
      "callbacks": {}
    },
    "wexperienceiconwrap1": {
      "callbacks": {}
    },
    "testimonialsection": {
      "callbacks": {}
    },
    "wraptestimonialhead": {
      "callbacks": {}
    },
    "testimonialheadwrap": {
      "callbacks": {}
    },
    "testimonialheadsubtextwrap": {
      "callbacks": {}
    },
    "wraptestimonialdown": {
      "callbacks": {}
    },
    "testimonialslider": {
      "callbacks": {}
    },
    "testimonialslidemask": {
      "callbacks": {}
    },
    "testimonialslideslide": {
      "callbacks": {}
    },
    "testimonialcontainer": {
      "callbacks": {}
    },
    "testimonialimagewrap": {
      "callbacks": {}
    },
    "testimonialcontent": {
      "callbacks": {}
    },
    "testimonialquoteiconwrap": {
      "callbacks": {}
    },
    "testimonialcontentwrap": {
      "callbacks": {}
    },
    "testimonialnameposwrap": {
      "callbacks": {}
    },
    "testimonialnamewrap": {
      "callbacks": {}
    },
    "testimonialarrowleftslider": {
      "callbacks": {}
    },
    "testimonialarrowiconleft": {
      "callbacks": {}
    },
    "testimonialarrowrightslider": {
      "callbacks": {}
    },
    "testimonialarrowiconright": {
      "callbacks": {}
    },
    "atribadge": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "atritextwrap": {
      "callbacks": {}
    },
    "faqsection": {
      "callbacks": {}
    },
    "wrapperfaqheading": {
      "callbacks": {}
    },
    "faqheadingwrapper": {
      "callbacks": {}
    },
    "faqsubtextwrapper": {
      "callbacks": {}
    },
    "wrapperfaqdown": {
      "callbacks": {}
    },
    "faqcontainer": {
      "callbacks": {}
    },
    "faqleft": {
      "callbacks": {}
    },
    "faqitemcontainer1": {
      "callbacks": {
        "onClick": []
      }
    },
    "faqquestionarrowwrap1": {
      "callbacks": {}
    },
    "faqquestionwrapper1": {
      "callbacks": {}
    },
    "faqiconwrapper1": {
      "callbacks": {}
    },
    "faqanswer1": {
      "callbacks": {}
    },
    "faqitemcontainer2": {
      "callbacks": {
        "onClick": []
      }
    },
    "faqquestionarrowwrap2": {
      "callbacks": {}
    },
    "faqiconwrapper2": {
      "callbacks": {}
    },
    "faqquestionwrapper2": {
      "callbacks": {}
    },
    "faqanswer2": {
      "callbacks": {}
    },
    "faqitemcontainer3": {
      "callbacks": {
        "onClick": []
      }
    },
    "faqquestionarrowwrap3": {
      "callbacks": {}
    },
    "faqiconwrapper3": {
      "callbacks": {}
    },
    "faqquestionwrapper3": {
      "callbacks": {}
    },
    "faqanswer3": {
      "callbacks": {}
    },
    "faqitemcontainer4": {
      "callbacks": {
        "onClick": []
      }
    },
    "faqquestionarrowwrap4": {
      "callbacks": {}
    },
    "faqiconwrapper4": {
      "callbacks": {}
    },
    "faqquestionwrapper4": {
      "callbacks": {}
    },
    "faqanswer4": {
      "callbacks": {}
    },
    "faqright": {
      "callbacks": {}
    },
    "rfaqitemcontainer4": {
      "callbacks": {
        "onClick": []
      }
    },
    "rfaqanswer4": {
      "callbacks": {}
    },
    "rfaqquestionarrowwrap4": {
      "callbacks": {}
    },
    "rfaqquestionwrapper4": {
      "callbacks": {}
    },
    "rfaqiconwrapper4": {
      "callbacks": {}
    },
    "rfaqitemcontainer3": {
      "callbacks": {
        "onClick": []
      }
    },
    "rfaqanswer3": {
      "callbacks": {}
    },
    "rfaqquestionarrowwrap3": {
      "callbacks": {}
    },
    "rfaqquestionwrapper3": {
      "callbacks": {}
    },
    "rfaqiconwrapper3": {
      "callbacks": {}
    },
    "rfaqitemcontainer2": {
      "callbacks": {
        "onClick": []
      }
    },
    "rfaqanswer2": {
      "callbacks": {}
    },
    "rfaqquestionarrowwrap2": {
      "callbacks": {}
    },
    "rfaqquestionwrapper2": {
      "callbacks": {}
    },
    "rfaqiconwrapper2": {
      "callbacks": {}
    },
    "rfaqitemcontainer1": {
      "callbacks": {
        "onClick": []
      }
    },
    "rfaqanswer1": {
      "callbacks": {}
    },
    "rfaqquestionarrowwrap1": {
      "callbacks": {}
    },
    "rfaqiconwrapper1": {
      "callbacks": {}
    },
    "rfaqquestionwrapper1": {
      "callbacks": {}
    },
    "footersection": {
      "callbacks": {}
    },
    "wrapperfooter": {
      "callbacks": {}
    },
    "footerheadingwrap": {
      "callbacks": {}
    },
    "footerlinkwrap": {
      "callbacks": {}
    },
    "subfooterwrapper": {
      "callbacks": {}
    },
    "subfootertext": {
      "callbacks": {}
    },
    "footeraddresslinkswrap": {
      "callbacks": {}
    },
    "footeraddresswrap": {
      "callbacks": {}
    },
    "footerlogowrapinline": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "contactemailfooter": {
      "callbacks": {}
    },
    "footeremailimagewrap": {
      "callbacks": {}
    },
    "footerlinksgrid": {
      "callbacks": {}
    },
    "footerlinkabout": {
      "callbacks": {
        "onClick": []
      }
    },
    "footerlinkservice": {
      "callbacks": {}
    },
    "footerlinkexperience": {
      "callbacks": {}
    },
    "footerlinkcontact": {
      "callbacks": {}
    },
    "footerlinkblog": {
      "callbacks": {}
    },
    "footerlinkprojects": {
      "callbacks": {}
    },
    "footerlinkdribble": {
      "callbacks": {}
    },
    "footerlinkinstagram": {
      "callbacks": {}
    },
    "footerlinktwitters": {
      "callbacks": {}
    },
    "imglogo": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/navTitle.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/",
              "target": "_self"
            }
          }
        ]
      }
    },
    "about": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "services": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "projects": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blog": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "bookcall": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "navarrowimg": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/navArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "headtext": {
      "custom": {
        "text": "I design products"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "bodytext": {
      "custom": {
        "text": "that delight and inspire people."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "paragraph": {
      "custom": {
        "text": "Hi! I’m Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "upbuttontext": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "downbuttontext": {
      "custom": {
        "text": "Let's talk now!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "linktext": {
      "custom": {
        "text": "Download CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "headarrowimg": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/navArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "bodyimg": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/homesectionimg.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "trustedbytext": {
      "custom": {
        "text": "Trusted by"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "logoipsum2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logoipsum2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "logoipsum3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logoipsum3.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "logoipsum4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logoipsum4.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "logoipsum1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logoipsum.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "servicesheadtext": {
      "custom": {
        "text": "SERVICES"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "servicesheadingtext": {
      "custom": {
        "text": "Design that solves problems, one product at a time."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "servicelogo1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/servicelogo1.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "serviceitemheadwraptext": {
      "custom": {
        "text": "What I can do for you"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "serviceitempara": {
      "custom": {
        "text": "Faster, better products that your users love. Here's all the services I provide:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "servicepointerbullet1": {
      "callbacks": {}
    },
    "servicepointerorgtext1": {
      "custom": {
        "text": "Design Strategy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "servicepointerbullet2": {
      "callbacks": {}
    },
    "servicepointerorgtext2": {
      "custom": {
        "text": "Web and Mobile App Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "servicepointerbullet3": {
      "callbacks": {}
    },
    "servicepoiservicepointerorgtext3nterbullet3": {
      "custom": {
        "text": "Front-end Development"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex47": {
      "callbacks": {}
    },
    "TextBox35": {
      "custom": {
        "text": "Figma"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex48": {
      "callbacks": {}
    },
    "TextBox36": {
      "custom": {
        "text": "Webflow"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "servicepointerbullet1mid": {
      "callbacks": {}
    },
    "servicepointerorgtext1mid": {
      "custom": {
        "text": "Sketch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "serviceitemparamid": {
      "custom": {
        "text": "Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "serviceitemheadwraptextmid": {
      "custom": {
        "text": "Applications I'm fluent in"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "servicelogo2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/servicelogo2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex54": {
      "callbacks": {}
    },
    "TextBox40": {
      "custom": {
        "text": " Efficient and maintainable"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex55": {
      "callbacks": {}
    },
    "TextBox41": {
      "custom": {
        "text": "Device and user friendly"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "servicepointerbullet1bot": {
      "callbacks": {}
    },
    "servicepointerorgtext1bot": {
      "custom": {
        "text": "Clean and functional"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "serviceitemparabot": {
      "custom": {
        "text": "I design products that are more than pretty. I make them shippable and usable."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "serviceitemheadwraptextbot": {
      "custom": {
        "text": "What you can expect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "servicelogo3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/servicelogo3.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "casestudysubtext": {
      "custom": {
        "text": "PROJECTS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "casestudyheadtext1": {
      "custom": {
        "text": "I bring results."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "casestudyheadtext2": {
      "custom": {
        "text": "My clients are proof."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "projectsdownbuttontest": {
      "custom": {
        "text": "Let's talk now!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "projectsupbuttontest": {
      "custom": {
        "text": "View all projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "projectslideimageupload1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/branding1.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "projectslideheadingtext1": {
      "custom": {
        "text": "Soluful Rebrand"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "projectslidetagtext1": {
      "custom": {
        "text": "BRANDING"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "viewprojecttextbox1": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "viewprojectimagearrow1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/navArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "viewprojecttextbox4": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "viewprojectimagearrow4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/navArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "projectslidetagtext4": {
      "custom": {
        "text": "BRANDING"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "projectslideheadingtext4": {
      "custom": {
        "text": "GorillaX Branding"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "projectslideimageupload4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/branding2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "viewprojecttextbox5": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "viewprojectimagearrow5": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/navArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "projectslidetagtext5": {
      "custom": {
        "text": "WEB DESIGN"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "projectslideheadingtext5": {
      "custom": {
        "text": "Joggr Website Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "projectslideimageupload5": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/webdesign2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "viewprojecttextbox2": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "viewprojectimagearrow2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/navArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "projectslidetagtext2": {
      "custom": {
        "text": "PRODUCT DESIGN"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "projectslideheadingtext2": {
      "custom": {
        "text": "Datadash Product Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "projectslideimageupload2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/productdesign.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "viewprojecttextbox3": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "viewprojectimagearrow3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/navArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "projectslidetagtext3": {
      "custom": {
        "text": "WEB DESIGN"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "projectslideheadingtext3": {
      "custom": {
        "text": "Maize Website Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "projectslideimageupload3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/webdesign1.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "lessthanblackimage": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/lessthanblackimg.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "greaterthanblackimage": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/greaterthanblackimage.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blogsubtext": {
      "custom": {
        "text": "BLOGS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "whiteblogtext": {
      "custom": {
        "text": "Latest Blogs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blogitemarticletextblogwhite": {
      "custom": {
        "text": "View all"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blogitemarrowimg": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-white.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blogitemarrowwrapimage": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-white.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blogitemreadarticlewraptext": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blogitemheadwraptext": {
      "custom": {
        "text": "Design tips for designers, that cover everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blogitemdot": {
      "callbacks": {}
    },
    "blogitemdatetext": {
      "custom": {
        "text": "December 26, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blogitemtimetext": {
      "custom": {
        "text": "6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blogitemdot2": {
      "callbacks": {}
    },
    "blogitemtimetext2": {
      "custom": {
        "text": "5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blogitemdatetext2": {
      "custom": {
        "text": "December 26, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blogitemheadwraptext2": {
      "custom": {
        "text": "How to build rapport with your web design clients"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blogitemreadarticlewraptext2": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blogitemarrowwrapimage2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-white.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blogitemdot3": {
      "callbacks": {}
    },
    "blogitemtimetext3": {
      "custom": {
        "text": "5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blogitemdatetext3": {
      "custom": {
        "text": "December 26, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blogitemheadwraptext3": {
      "custom": {
        "text": "Top 6 free website mockup tools 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blogitemreadarticlewraptext3": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blogitemarrowwrapimage3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-white.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blogitemdot4": {
      "callbacks": {}
    },
    "blogitemtimetext4": {
      "custom": {
        "text": "7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blogitemdatetext4": {
      "custom": {
        "text": "December 26, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blogitemheadwraptext4": {
      "custom": {
        "text": "Logo design trends to avoid in 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blogitemreadarticlewraptext4": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blogitemarrowwrapimage4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-white.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blogitemdot5": {
      "callbacks": {}
    },
    "blogitemtimetext5": {
      "custom": {
        "text": "7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blogitemdatetext5": {
      "custom": {
        "text": "December 26, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blogitemheadwraptext5": {
      "custom": {
        "text": "22 best UI design tools"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blogitemreadarticlewraptext5": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blogitemarrowwrapimage5": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-white.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "aboutsubtextwraptext": {
      "custom": {
        "text": "PRODUCT DESIGNER"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "aboutheadingwraptext": {
      "custom": {
        "text": "That's me!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "aboutcontentwrappara": {
      "custom": {
        "text": "Over the past 12 years, I've worked with a diverse range of clients, from startups to Fortune 500 companies. I love crafting interfaces that delight users and help businesses grow."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "aboutimageupload1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/aboutsectionimg1.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "aboutimageupload2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/aboutsectionimg2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "aboutimageupload3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/aboutsectionimg3.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "aboutimageupload4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/aboutsectionimg4.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "experienceheadingwraptext": {
      "custom": {
        "text": "📚   Education"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "experienceblackbottomborder1": {
      "callbacks": {}
    },
    "experiencetimeperiodwraptext1": {
      "custom": {
        "text": ". 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "experiencearrowwrapimage1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-top-right.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "experienceitmeheadingtext1": {
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "experienceitemsubheadwraptext1": {
      "custom": {
        "text": "MSc (Human Computer Interaction)"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "experienceblackbottomborder2": {
      "callbacks": {}
    },
    "experienceitmeheadingtext2": {
      "custom": {
        "text": "MIT Summer School"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "experienceitemsubheadwraptext2": {
      "custom": {
        "text": "UX Training Bootcamp"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "experiencetimeperiodwraptext2": {
      "custom": {
        "text": ". 2013-2014"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "experiencearrowwrapimage2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-top-right.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "experienceitmeheadingtext3": {
      "custom": {
        "text": "California State University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "experienceitemsubheadwraptext3": {
      "custom": {
        "text": "BSc in Software Engineering"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "experienceblackbottomborder3": {
      "callbacks": {}
    },
    "experiencetimeperiodwraptext3": {
      "custom": {
        "text": ". 2009-2012"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "experiencearrowwrapimage3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-top-right.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "workexperienceheadwraptext": {
      "custom": {
        "text": "💼  Work Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "wexperiencearrowwrapimage3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-top-right.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "wexperiencetimeperiodwraptext3": {
      "custom": {
        "text": ". April 2016 - May 2017"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "wexperienceblackbottomborder3": {
      "callbacks": {}
    },
    "wexperienceimg3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/kingdom.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "wexperienceitemsubheadwraptext3": {
      "custom": {
        "text": "UI Designer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "wexperienceitmeheadingtext3": {
      "custom": {
        "text": "Kingdom"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "wexperiencearrowwrapimage2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-top-right.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "wexperiencetimeperiodwraptext2": {
      "custom": {
        "text": ". April 2016 - May 2017"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "wexperienceblackbottomborder2": {
      "callbacks": {}
    },
    "wexperienceimg2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/musicmash.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "wexperienceitemsubheadwraptext2": {
      "custom": {
        "text": "Information Architect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "wexperienceitmeheadingtext2": {
      "custom": {
        "text": "MusicMash"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "wexperiencearrowwrapimage1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-top-right.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "wexperiencetimeperiodwraptext1": {
      "custom": {
        "text": ". April 2019 - Current"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "wexperienceblackbottomborder1": {
      "callbacks": {}
    },
    "wexperienceitmeheadingtext1": {
      "custom": {
        "text": "SpaceFleet"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "wexperienceitemsubheadwraptext1": {
      "custom": {
        "text": "Senior Product Designer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "wexperienceimg1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/spacefleet.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "testimonialheadingwraptext": {
      "custom": {
        "text": "Word on the street"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "testimonialheadingtext": {
      "custom": {
        "text": "TESTIMONIALS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "testimonialmainimage": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/testimonial-image.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "invertedcommaimage": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/inverted%20comma.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "testimonialcontenttext": {
      "custom": {
        "text": "Jade helped us build a software so intuitive that it didn't need a walkthrough. He solved complex problems with brilliant design."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "testimonialnametext": {
      "custom": {
        "text": "John Frankin"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "testimonialblocktext": {
      "custom": {
        "text": "Founder, Double Bunch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "lessthanimage": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/lessthanimage.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "greaterthanimage": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/greaterthanimage.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "atrilogo": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/atri%20logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "atritext": {
      "custom": {
        "text": "Made in Atri"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "faqheadtextbox": {
      "custom": {
        "text": "Frequently asked question"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "faqtextbox": {
      "custom": {
        "text": "FAQ"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "faqquestiontextbox1": {
      "custom": {
        "text": "What type of projects do you take on?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "arrowdownimg1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-down.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "faqanswerpara1": {
      "custom": {
        "text": "I usually work on B2C software, that's my forte--where I shine best. But I also have about 15 B2B software products in my portfolio. I do end-to-end product design + branding."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "arrowdownimg2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-down.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "faqquestiontextbox2": {
      "custom": {
        "text": "What is your hourly rate?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "faqanswerpara2": {
      "custom": {
        "text": "I only charge hourly for my ongoing projects that need work on the regular. One-time projects are charged upfront to keep it transparent and clean! My hourly rate is $100."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "arrowdownimg3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-down.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "faqquestiontextbox3": {
      "custom": {
        "text": "What time-zone do you work in?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "faqanswerpara3": {
      "custom": {
        "text": "I work Pacific Standard Time, but I'm always ready to help out in emergencies, no matter the hour."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "arrowdownimg4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-down.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "faqquestiontextbox4": {
      "custom": {
        "text": "What is the typical timeline for a project?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "faqanswerpara4": {
      "custom": {
        "text": "Depends on the scope of the project, really. Some projects take less than a week. Some take months. The best way to find out is to get on a quick call with me, and discuss it. No strings attached!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "rfaqanswerpara4": {
      "custom": {
        "text": "I always make sure to help out my clients one month after the project ends, for free. For any help post that, we can work out an ongoing arrangement!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "rfaqquestiontextbox4": {
      "custom": {
        "text": "What if I need help after the project is complete?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "rarrowdownimg4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-down.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "rfaqanswerpara3": {
      "custom": {
        "text": "The best metrics are customer adoption, happiness, task success, and engagement. There are a number of frameworks such as the System Usability Scale that help us understand product performance and I'm happy to help with that."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "rfaqquestiontextbox3": {
      "custom": {
        "text": "What metrics do you use to measure success?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "rarrowdownimg3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-down.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "rfaqanswerpara2": {
      "custom": {
        "text": "I take a problem-forward approach. Whether we're iterating on an existing product or building a new one from scratch, how to solve the user's problem in the simplest way possible is my first concern.  Send me an email to understand my process in depth!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "rfaqquestiontextbox2": {
      "custom": {
        "text": "What does your design process look like?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "rarrowdownimg2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-down.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "rfaqanswerpara1": {
      "custom": {
        "text": "I quote a price upfront--so that you know exactly what you're paying and for what, and there are no surprises later. The exact cost of your project depends on the scope and requirements!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "rarrowdownimg1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-down.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "rfaqquestiontextbox1": {
      "custom": {
        "text": "How do you charge for projects ?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footerheading": {
      "custom": {
        "text": "Ready to make something kickass?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footercta": {
      "custom": {
        "text": "Let's get on a call."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footerline": {
      "callbacks": {}
    },
    "footercopyrights": {
      "custom": {
        "text": "© All rights reserved. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footerconversionflow": {
      "custom": {
        "text": "Conversionflow"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footerpoweredby": {
      "custom": {
        "text": ". Powered by "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footriatri": {
      "custom": {
        "text": "Atri"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://atrilabs.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "footerslash1": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footerimagelicenseinfo": {
      "custom": {
        "text": "Image License Info"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footerslash2": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footerinstructions": {
      "custom": {
        "text": "Instructions"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footerslash3": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footerchangelog": {
      "custom": {
        "text": "Changelog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footerslash4": {
      "custom": {
        "text": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footerstyleguide": {
      "custom": {
        "text": "Style Guide"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footerparagraph": {
      "custom": {
        "text": "4353 Delaware Avenue, San Francisco, USA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footerlogo": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/footerlogo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "/",
              "target": "_self"
            }
          }
        ]
      }
    },
    "footerimagetext": {
      "custom": {
        "text": "hi@thefolio.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "emaillogoimage": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/email-logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footerabouttext": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footerlinkbottomborder1": {
      "callbacks": {}
    },
    "footerlinkbottomborder2": {
      "callbacks": {}
    },
    "footerservicetext": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footerlinkbottomborder3": {
      "callbacks": {}
    },
    "footerexperiencetext": {
      "custom": {
        "text": "Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footerlinkbottomborder4": {
      "callbacks": {}
    },
    "footercontacttext": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footerlinkbottomborder5": {
      "callbacks": {}
    },
    "footerblogtext": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footerlinkbottomborder6": {
      "callbacks": {}
    },
    "footerprojectstext": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footerlinkbottomborder7": {
      "callbacks": {}
    },
    "footerdribbletext": {
      "custom": {
        "text": "Dribble"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footerlinkbottomborder8": {
      "callbacks": {}
    },
    "footerinstagramtext": {
      "custom": {
        "text": "Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footerlinkbottomborder9": {
      "callbacks": {}
    },
    "footertwittertext": {
      "custom": {
        "text": "Twitter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
