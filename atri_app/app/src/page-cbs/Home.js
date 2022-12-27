import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function usenavwrapCb() {
	const onClick = useCallback(callbackFactory("navwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usenavlogoCb() {
	const onClick = useCallback(callbackFactory("navlogo", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "internal",
        "url": "/"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usenavmenuCb() {
	const onClick = useCallback(callbackFactory("navmenu", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useimglogoCb() {
	const onClick = useCallback(callbackFactory("imglogo", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "/",
        "target": "_self"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useaboutCb() {
	const onClick = useCallback(callbackFactory("about", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicesCb() {
	const onClick = useCallback(callbackFactory("services", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectsCb() {
	const onClick = useCallback(callbackFactory("projects", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogCb() {
	const onClick = useCallback(callbackFactory("blog", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usecontactCb() {
	const onClick = useCallback(callbackFactory("contact", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usecontactflexCb() {
	const onClick = useCallback(callbackFactory("contactflex", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usebookcallCb() {
	const onClick = useCallback(callbackFactory("bookcall", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usenavarrowimgCb() {
	const onClick = useCallback(callbackFactory("navarrowimg", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usenavbarCb() {
	const onClick = useCallback(callbackFactory("navbar", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usecontainer1Cb() {
	const onClick = useCallback(callbackFactory("container1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usecontainerwrapCb() {
	const onClick = useCallback(callbackFactory("containerwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usecontainbodyCb() {
	const onClick = useCallback(callbackFactory("containbody", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usecontainheadCb() {
	const onClick = useCallback(callbackFactory("containhead", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useheadingCb() {
	const onClick = useCallback(callbackFactory("heading", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useheadtextCb() {
	const onClick = useCallback(callbackFactory("headtext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usebodytextCb() {
	const onClick = useCallback(callbackFactory("bodytext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useparagraphwrapCb() {
	const onClick = useCallback(callbackFactory("paragraphwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useparagraphCb() {
	const onClick = useCallback(callbackFactory("paragraph", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usebuttonwrapCb() {
	const onClick = useCallback(callbackFactory("buttonwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usebuttoninlineCb() {
	const onClick = useCallback(callbackFactory("buttoninline", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useupperbuttonCb() {
	const onClick = useCallback(callbackFactory("upperbutton", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useupbuttontextCb() {
	const onClick = useCallback(callbackFactory("upbuttontext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usedownbuttonCb() {
	const onClick = useCallback(callbackFactory("downbutton", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usedownbuttontextCb() {
	const onClick = useCallback(callbackFactory("downbuttontext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function uselinkinlineCb() {
	const onClick = useCallback(callbackFactory("linkinline", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://atrilabs.com/",
        "target": "_self"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function uselinktextCb() {
	const onClick = useCallback(callbackFactory("linktext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useheadarrowimgCb() {
	const onClick = useCallback(callbackFactory("headarrowimg", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usebodyimgwrapCb() {
	const onClick = useCallback(callbackFactory("bodyimgwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usebodyimgCb() {
	const onClick = useCallback(callbackFactory("bodyimg", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usetrustedbysectionCb() {
	const onClick = useCallback(callbackFactory("trustedbysection", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usetrustedbywrapCb() {
	const onClick = useCallback(callbackFactory("trustedbywrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usetrustedbytextCb() {
	const onClick = useCallback(callbackFactory("trustedbytext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function uselogoipsum2Cb() {
	const onClick = useCallback(callbackFactory("logoipsum2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function uselogoipsum3Cb() {
	const onClick = useCallback(callbackFactory("logoipsum3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function uselogoipsum4Cb() {
	const onClick = useCallback(callbackFactory("logoipsum4", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usetrustedlogocontainCb() {
	const onClick = useCallback(callbackFactory("trustedlogocontain", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function uselogoipsum1Cb() {
	const onClick = useCallback(callbackFactory("logoipsum1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicessectionCb() {
	const onClick = useCallback(callbackFactory("servicessection", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useserviceswrapCb() {
	const onClick = useCallback(callbackFactory("serviceswrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicesubheadwrapCb() {
	const onClick = useCallback(callbackFactory("servicesubheadwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicesheadtextCb() {
	const onClick = useCallback(callbackFactory("servicesheadtext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicessubheadtextwrapCb() {
	const onClick = useCallback(callbackFactory("servicessubheadtextwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicesheadwrapCb() {
	const onClick = useCallback(callbackFactory("servicesheadwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicesheadingtextCb() {
	const onClick = useCallback(callbackFactory("servicesheadingtext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicesgridCb() {
	const onClick = useCallback(callbackFactory("servicesgrid", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicesgridwrap1Cb() {
	const onClick = useCallback(callbackFactory("servicesgridwrap1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useserviceitemiconwrapCb() {
	const onClick = useCallback(callbackFactory("serviceitemiconwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useserviceitemheadwrapCb() {
	const onClick = useCallback(callbackFactory("serviceitemheadwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useserviceitemparawrapCb() {
	const onClick = useCallback(callbackFactory("serviceitemparawrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointerwrapCb() {
	const onClick = useCallback(callbackFactory("servicepointerwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicelogo1Cb() {
	const onClick = useCallback(callbackFactory("servicelogo1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useserviceitemheadwraptextCb() {
	const onClick = useCallback(callbackFactory("serviceitemheadwraptext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useserviceitemparaCb() {
	const onClick = useCallback(callbackFactory("serviceitempara", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointeritem1Cb() {
	const onClick = useCallback(callbackFactory("servicepointeritem1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointeritem2Cb() {
	const onClick = useCallback(callbackFactory("servicepointeritem2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointeritem3Cb() {
	const onClick = useCallback(callbackFactory("servicepointeritem3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointerflex1Cb() {
	const onClick = useCallback(callbackFactory("servicepointerflex1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointertextdiv1Cb() {
	const onClick = useCallback(callbackFactory("servicepointertextdiv1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointerorgtext1Cb() {
	const onClick = useCallback(callbackFactory("servicepointerorgtext1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointerbullet1Cb() {
	const onClick = useCallback(callbackFactory("servicepointerbullet1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointerorgtext2Cb() {
	const onClick = useCallback(callbackFactory("servicepointerorgtext2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointerbullet2Cb() {
	const onClick = useCallback(callbackFactory("servicepointerbullet2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointertextdiv2Cb() {
	const onClick = useCallback(callbackFactory("servicepointertextdiv2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointerflex2Cb() {
	const onClick = useCallback(callbackFactory("servicepointerflex2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepoiservicepointerorgtext3nterbullet3Cb() {
	const onClick = useCallback(callbackFactory("servicepoiservicepointerorgtext3nterbullet3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointertextdiv3Cb() {
	const onClick = useCallback(callbackFactory("servicepointertextdiv3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointerbullet3Cb() {
	const onClick = useCallback(callbackFactory("servicepointerbullet3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointerflex3Cb() {
	const onClick = useCallback(callbackFactory("servicepointerflex3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox35Cb() {
	const onClick = useCallback(callbackFactory("TextBox35", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox36Cb() {
	const onClick = useCallback(callbackFactory("TextBox36", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointerorgtext1midCb() {
	const onClick = useCallback(callbackFactory("servicepointerorgtext1mid", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex47Cb() {
	const onClick = useCallback(callbackFactory("Flex47", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useDiv51Cb() {
	const onClick = useCallback(callbackFactory("Div51", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useDiv52Cb() {
	const onClick = useCallback(callbackFactory("Div52", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex48Cb() {
	const onClick = useCallback(callbackFactory("Flex48", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointerbullet1midCb() {
	const onClick = useCallback(callbackFactory("servicepointerbullet1mid", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointertextdiv1midCb() {
	const onClick = useCallback(callbackFactory("servicepointertextdiv1mid", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex50Cb() {
	const onClick = useCallback(callbackFactory("Flex50", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex51Cb() {
	const onClick = useCallback(callbackFactory("Flex51", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointerflex1midCb() {
	const onClick = useCallback(callbackFactory("servicepointerflex1mid", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointeritem3midCb() {
	const onClick = useCallback(callbackFactory("servicepointeritem3mid", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointeritem2midCb() {
	const onClick = useCallback(callbackFactory("servicepointeritem2mid", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointeritem1midCb() {
	const onClick = useCallback(callbackFactory("servicepointeritem1mid", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useserviceitemparamidCb() {
	const onClick = useCallback(callbackFactory("serviceitemparamid", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useserviceitemheadwraptextmidCb() {
	const onClick = useCallback(callbackFactory("serviceitemheadwraptextmid", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicelogo2Cb() {
	const onClick = useCallback(callbackFactory("servicelogo2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointerwrapmidCb() {
	const onClick = useCallback(callbackFactory("servicepointerwrapmid", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useserviceitemparawrapmidCb() {
	const onClick = useCallback(callbackFactory("serviceitemparawrapmid", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useserviceitemheadwrapmidCb() {
	const onClick = useCallback(callbackFactory("serviceitemheadwrapmid", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useserviceitemiconwrapmidCb() {
	const onClick = useCallback(callbackFactory("serviceitemiconwrapmid", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicesgridwrap2Cb() {
	const onClick = useCallback(callbackFactory("servicesgridwrap2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox40Cb() {
	const onClick = useCallback(callbackFactory("TextBox40", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox41Cb() {
	const onClick = useCallback(callbackFactory("TextBox41", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointerorgtext1botCb() {
	const onClick = useCallback(callbackFactory("servicepointerorgtext1bot", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex54Cb() {
	const onClick = useCallback(callbackFactory("Flex54", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useDiv61Cb() {
	const onClick = useCallback(callbackFactory("Div61", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useDiv62Cb() {
	const onClick = useCallback(callbackFactory("Div62", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex55Cb() {
	const onClick = useCallback(callbackFactory("Flex55", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointerbullet1botCb() {
	const onClick = useCallback(callbackFactory("servicepointerbullet1bot", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointertextdiv1botCb() {
	const onClick = useCallback(callbackFactory("servicepointertextdiv1bot", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex57Cb() {
	const onClick = useCallback(callbackFactory("Flex57", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex58Cb() {
	const onClick = useCallback(callbackFactory("Flex58", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointerflex1botCb() {
	const onClick = useCallback(callbackFactory("servicepointerflex1bot", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointeritem3botCb() {
	const onClick = useCallback(callbackFactory("servicepointeritem3bot", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointeritem2botCb() {
	const onClick = useCallback(callbackFactory("servicepointeritem2bot", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointeritem1botCb() {
	const onClick = useCallback(callbackFactory("servicepointeritem1bot", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useserviceitemparabotCb() {
	const onClick = useCallback(callbackFactory("serviceitemparabot", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useserviceitemheadwraptextbotCb() {
	const onClick = useCallback(callbackFactory("serviceitemheadwraptextbot", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicelogo3Cb() {
	const onClick = useCallback(callbackFactory("servicelogo3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicepointerwrapbotCb() {
	const onClick = useCallback(callbackFactory("servicepointerwrapbot", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useserviceitemparawrapbotCb() {
	const onClick = useCallback(callbackFactory("serviceitemparawrapbot", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useserviceitemheadwrapbotCb() {
	const onClick = useCallback(callbackFactory("serviceitemheadwrapbot", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useserviceitemiconwrapbotCb() {
	const onClick = useCallback(callbackFactory("serviceitemiconwrapbot", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useservicesgridwrap3Cb() {
	const onClick = useCallback(callbackFactory("servicesgridwrap3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usecasestudysectionCb() {
	const onClick = useCallback(callbackFactory("casestudysection", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewrapcasestudyCb() {
	const onClick = useCallback(callbackFactory("wrapcasestudy", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewrapprojectsliderCb() {
	const onClick = useCallback(callbackFactory("wrapprojectslider", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usecasestudyheadwrapCb() {
	const onClick = useCallback(callbackFactory("casestudyheadwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usecasestudysubtextCb() {
	const onClick = useCallback(callbackFactory("casestudysubtext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usecasestudyheadtext1Cb() {
	const onClick = useCallback(callbackFactory("casestudyheadtext1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usecasestudyheadtext2Cb() {
	const onClick = useCallback(callbackFactory("casestudyheadtext2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usecasestudyheadtextdivCb() {
	const onClick = useCallback(callbackFactory("casestudyheadtextdiv", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectsdownbuttontestCb() {
	const onClick = useCallback(callbackFactory("projectsdownbuttontest", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectsupbuttontestCb() {
	const onClick = useCallback(callbackFactory("projectsupbuttontest", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectsdownbuttonCb() {
	const onClick = useCallback(callbackFactory("projectsdownbutton", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectsupperbuttonCb() {
	const onClick = useCallback(callbackFactory("projectsupperbutton", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectsbuttoninlineCb() {
	const onClick = useCallback(callbackFactory("projectsbuttoninline", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogsectionCb() {
	const onClick = useCallback(callbackFactory("blogsection", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewrapbloghomepageCb() {
	const onClick = useCallback(callbackFactory("wrapbloghomepage", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogheadsubtextwrapCb() {
	const onClick = useCallback(callbackFactory("blogheadsubtextwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogcontentwrapCb() {
	const onClick = useCallback(callbackFactory("blogcontentwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogsubtextwrapCb() {
	const onClick = useCallback(callbackFactory("blogsubtextwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogheadingwrapCb() {
	const onClick = useCallback(callbackFactory("blogheadingwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemarticlewrapCb() {
	const onClick = useCallback(callbackFactory("blogitemarticlewrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogsubtextCb() {
	const onClick = useCallback(callbackFactory("blogsubtext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewhiteblogtextCb() {
	const onClick = useCallback(callbackFactory("whiteblogtext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemarticletextwrapCb() {
	const onClick = useCallback(callbackFactory("blogitemarticletextwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemarrowwrapCb() {
	const onClick = useCallback(callbackFactory("blogitemarrowwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemarticletextblogwhiteCb() {
	const onClick = useCallback(callbackFactory("blogitemarticletextblogwhite", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemarrowimgCb() {
	const onClick = useCallback(callbackFactory("blogitemarrowimg", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogsectionlistCb() {
	const onClick = useCallback(callbackFactory("blogsectionlist", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usebloghsectionlistitem1Cb() {
	const onClick = useCallback(callbackFactory("bloghsectionlistitem1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usebloghsectionlistitem2nCb() {
	const onClick = useCallback(callbackFactory("bloghsectionlistitem2n", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usebloghsectionlistitemCb() {
	const onClick = useCallback(callbackFactory("bloghsectionlistitem", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usebloghsectionlistitem4Cb() {
	const onClick = useCallback(callbackFactory("bloghsectionlistitem4", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usebloghsectionlistitem5Cb() {
	const onClick = useCallback(callbackFactory("bloghsectionlistitem5", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogsectionblogitemwrapCb() {
	const onClick = useCallback(callbackFactory("blogsectionblogitemwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemreadarticlewrapCb() {
	const onClick = useCallback(callbackFactory("blogitemreadarticlewrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemheadingwrapCb() {
	const onClick = useCallback(callbackFactory("blogitemheadingwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemdatetimewrapCb() {
	const onClick = useCallback(callbackFactory("blogitemdatetimewrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemdatewrapCb() {
	const onClick = useCallback(callbackFactory("blogitemdatewrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemdatetextCb() {
	const onClick = useCallback(callbackFactory("blogitemdatetext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemdotCb() {
	const onClick = useCallback(callbackFactory("blogitemdot", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemtimewrapCb() {
	const onClick = useCallback(callbackFactory("blogitemtimewrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemtimetextCb() {
	const onClick = useCallback(callbackFactory("blogitemtimetext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemheadwraptextCb() {
	const onClick = useCallback(callbackFactory("blogitemheadwraptext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemarrowwrapwhiteCb() {
	const onClick = useCallback(callbackFactory("blogitemarrowwrapwhite", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemreadarticletextwrapCb() {
	const onClick = useCallback(callbackFactory("blogitemreadarticletextwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemreadarticlewraptextCb() {
	const onClick = useCallback(callbackFactory("blogitemreadarticlewraptext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemarrowwrapimageCb() {
	const onClick = useCallback(callbackFactory("blogitemarrowwrapimage", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemtimetext2Cb() {
	const onClick = useCallback(callbackFactory("blogitemtimetext2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemdatetext2Cb() {
	const onClick = useCallback(callbackFactory("blogitemdatetext2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemreadarticlewraptext2Cb() {
	const onClick = useCallback(callbackFactory("blogitemreadarticlewraptext2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemarrowwrapimage2Cb() {
	const onClick = useCallback(callbackFactory("blogitemarrowwrapimage2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemtimewrap2Cb() {
	const onClick = useCallback(callbackFactory("blogitemtimewrap2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemdot2Cb() {
	const onClick = useCallback(callbackFactory("blogitemdot2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemdatewrap2ndCb() {
	const onClick = useCallback(callbackFactory("blogitemdatewrap2nd", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemheadwraptext2Cb() {
	const onClick = useCallback(callbackFactory("blogitemheadwraptext2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemreadarticletextwrap2Cb() {
	const onClick = useCallback(callbackFactory("blogitemreadarticletextwrap2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemarrowwrapwhite2Cb() {
	const onClick = useCallback(callbackFactory("blogitemarrowwrapwhite2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemdatetimewrap2Cb() {
	const onClick = useCallback(callbackFactory("blogitemdatetimewrap2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemheadingwrap2Cb() {
	const onClick = useCallback(callbackFactory("blogitemheadingwrap2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemreadarticlewrap2Cb() {
	const onClick = useCallback(callbackFactory("blogitemreadarticlewrap2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogsectionblogitemwrap2Cb() {
	const onClick = useCallback(callbackFactory("blogsectionblogitemwrap2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemtimetext3Cb() {
	const onClick = useCallback(callbackFactory("blogitemtimetext3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemdatetext3Cb() {
	const onClick = useCallback(callbackFactory("blogitemdatetext3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemreadarticlewraptext3Cb() {
	const onClick = useCallback(callbackFactory("blogitemreadarticlewraptext3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemarrowwrapimage3Cb() {
	const onClick = useCallback(callbackFactory("blogitemarrowwrapimage3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemtimewrap3Cb() {
	const onClick = useCallback(callbackFactory("blogitemtimewrap3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemdot3Cb() {
	const onClick = useCallback(callbackFactory("blogitemdot3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemdatewrap3Cb() {
	const onClick = useCallback(callbackFactory("blogitemdatewrap3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemheadwraptext3Cb() {
	const onClick = useCallback(callbackFactory("blogitemheadwraptext3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemreadarticletextwrap3Cb() {
	const onClick = useCallback(callbackFactory("blogitemreadarticletextwrap3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemarrowwrapwhite3Cb() {
	const onClick = useCallback(callbackFactory("blogitemarrowwrapwhite3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemdatewrap3rdCb() {
	const onClick = useCallback(callbackFactory("blogitemdatewrap3rd", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemheadingwrap3Cb() {
	const onClick = useCallback(callbackFactory("blogitemheadingwrap3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemreadarticlewrap3Cb() {
	const onClick = useCallback(callbackFactory("blogitemreadarticlewrap3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogsectionblogitemwrap3Cb() {
	const onClick = useCallback(callbackFactory("blogsectionblogitemwrap3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemtimetext4Cb() {
	const onClick = useCallback(callbackFactory("blogitemtimetext4", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemdatetext4Cb() {
	const onClick = useCallback(callbackFactory("blogitemdatetext4", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemreadarticlewraptext4Cb() {
	const onClick = useCallback(callbackFactory("blogitemreadarticlewraptext4", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemarrowwrapimage4Cb() {
	const onClick = useCallback(callbackFactory("blogitemarrowwrapimage4", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemtimewrap4Cb() {
	const onClick = useCallback(callbackFactory("blogitemtimewrap4", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemdot4Cb() {
	const onClick = useCallback(callbackFactory("blogitemdot4", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemdatewrap4thCb() {
	const onClick = useCallback(callbackFactory("blogitemdatewrap4th", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemheadwraptext4Cb() {
	const onClick = useCallback(callbackFactory("blogitemheadwraptext4", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemreadarticletextwrap4Cb() {
	const onClick = useCallback(callbackFactory("blogitemreadarticletextwrap4", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemarrowwrapwhite4Cb() {
	const onClick = useCallback(callbackFactory("blogitemarrowwrapwhite4", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemdatetimewrap4Cb() {
	const onClick = useCallback(callbackFactory("blogitemdatetimewrap4", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemheadingwrap4Cb() {
	const onClick = useCallback(callbackFactory("blogitemheadingwrap4", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemreadarticlewrap4Cb() {
	const onClick = useCallback(callbackFactory("blogitemreadarticlewrap4", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogsectionblogitemwrap4Cb() {
	const onClick = useCallback(callbackFactory("blogsectionblogitemwrap4", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemtimetext5Cb() {
	const onClick = useCallback(callbackFactory("blogitemtimetext5", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemdatetext5Cb() {
	const onClick = useCallback(callbackFactory("blogitemdatetext5", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemreadarticlewraptext5Cb() {
	const onClick = useCallback(callbackFactory("blogitemreadarticlewraptext5", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemarrowwrapimage5Cb() {
	const onClick = useCallback(callbackFactory("blogitemarrowwrapimage5", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemtimewrap5Cb() {
	const onClick = useCallback(callbackFactory("blogitemtimewrap5", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemdot5Cb() {
	const onClick = useCallback(callbackFactory("blogitemdot5", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemdatewrap5thCb() {
	const onClick = useCallback(callbackFactory("blogitemdatewrap5th", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemheadwraptext5Cb() {
	const onClick = useCallback(callbackFactory("blogitemheadwraptext5", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemreadarticletextwrap5Cb() {
	const onClick = useCallback(callbackFactory("blogitemreadarticletextwrap5", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemarrowwrapwhite5Cb() {
	const onClick = useCallback(callbackFactory("blogitemarrowwrapwhite5", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemdatetimewrap5Cb() {
	const onClick = useCallback(callbackFactory("blogitemdatetimewrap5", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemheadingwrap5Cb() {
	const onClick = useCallback(callbackFactory("blogitemheadingwrap5", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogitemreadarticlewrap5Cb() {
	const onClick = useCallback(callbackFactory("blogitemreadarticlewrap5", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useblogsectionblogitemwrap5Cb() {
	const onClick = useCallback(callbackFactory("blogsectionblogitemwrap5", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useaboutsectionCb() {
	const onClick = useCallback(callbackFactory("aboutsection", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewrapperaboutCb() {
	const onClick = useCallback(callbackFactory("wrapperabout", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewrapperlightboxCb() {
	const onClick = useCallback(callbackFactory("wrapperlightbox", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useaboutheadsubtextwrapCb() {
	const onClick = useCallback(callbackFactory("aboutheadsubtextwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useaboutcontentwrapCb() {
	const onClick = useCallback(callbackFactory("aboutcontentwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useaboutsubtextwrapCb() {
	const onClick = useCallback(callbackFactory("aboutsubtextwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useaboutheadingwrapCb() {
	const onClick = useCallback(callbackFactory("aboutheadingwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useaboutsubtextwraptextCb() {
	const onClick = useCallback(callbackFactory("aboutsubtextwraptext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useaboutheadingwraptextCb() {
	const onClick = useCallback(callbackFactory("aboutheadingwraptext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useaboutcontentwrapparaCb() {
	const onClick = useCallback(callbackFactory("aboutcontentwrappara", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useaboutimage1Cb() {
	const onClick = useCallback(callbackFactory("aboutimage1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useaboutimage2Cb() {
	const onClick = useCallback(callbackFactory("aboutimage2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useaboutimage3Cb() {
	const onClick = useCallback(callbackFactory("aboutimage3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useaboutimage4Cb() {
	const onClick = useCallback(callbackFactory("aboutimage4", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useaboutimageupload2Cb() {
	const onClick = useCallback(callbackFactory("aboutimageupload2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useaboutimageupload3Cb() {
	const onClick = useCallback(callbackFactory("aboutimageupload3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useaboutimageupload4Cb() {
	const onClick = useCallback(callbackFactory("aboutimageupload4", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useaboutimageupload1Cb() {
	const onClick = useCallback(callbackFactory("aboutimageupload1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperiencesectionCb() {
	const onClick = useCallback(callbackFactory("experiencesection", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewrapperexperienceCb() {
	const onClick = useCallback(callbackFactory("wrapperexperience", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperienceleftwrapperCb() {
	const onClick = useCallback(callbackFactory("experienceleftwrapper", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperiencerightwrapperCb() {
	const onClick = useCallback(callbackFactory("experiencerightwrapper", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperienceheadingwrapperCb() {
	const onClick = useCallback(callbackFactory("experienceheadingwrapper", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperienceitemscontainerCb() {
	const onClick = useCallback(callbackFactory("experienceitemscontainer", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperienceheadingwraptextCb() {
	const onClick = useCallback(callbackFactory("experienceheadingwraptext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperienceitemwrapperinline1Cb() {
	const onClick = useCallback(callbackFactory("experienceitemwrapperinline1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperienceitemwrapperinline2Cb() {
	const onClick = useCallback(callbackFactory("experienceitemwrapperinline2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperienceitemwrapperinline3Cb() {
	const onClick = useCallback(callbackFactory("experienceitemwrapperinline3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperiencegreybottomborder1Cb() {
	const onClick = useCallback(callbackFactory("experiencegreybottomborder1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperiencearrowtimewrap1Cb() {
	const onClick = useCallback(callbackFactory("experiencearrowtimewrap1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperienceitemheadsubheadwrap1Cb() {
	const onClick = useCallback(callbackFactory("experienceitemheadsubheadwrap1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperiencegreybottomborder2Cb() {
	const onClick = useCallback(callbackFactory("experiencegreybottomborder2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperienceitemheadsubheadwrap2Cb() {
	const onClick = useCallback(callbackFactory("experienceitemheadsubheadwrap2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperiencearrowtimewrap2Cb() {
	const onClick = useCallback(callbackFactory("experiencearrowtimewrap2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperienceitemheadsubheadwrap3Cb() {
	const onClick = useCallback(callbackFactory("experienceitemheadsubheadwrap3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperiencegreybottomborder3Cb() {
	const onClick = useCallback(callbackFactory("experiencegreybottomborder3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperiencearrowtimewrap3Cb() {
	const onClick = useCallback(callbackFactory("experiencearrowtimewrap3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperienceitemheadingwrap1Cb() {
	const onClick = useCallback(callbackFactory("experienceitemheadingwrap1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperienceitemsubheadingwrap1Cb() {
	const onClick = useCallback(callbackFactory("experienceitemsubheadingwrap1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperienceitmeheadingtext1Cb() {
	const onClick = useCallback(callbackFactory("experienceitmeheadingtext1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperienceitemsubheadwraptext1Cb() {
	const onClick = useCallback(callbackFactory("experienceitemsubheadwraptext1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperiencetimeperiodwrap1Cb() {
	const onClick = useCallback(callbackFactory("experiencetimeperiodwrap1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperiencearrowwrapper1Cb() {
	const onClick = useCallback(callbackFactory("experiencearrowwrapper1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperiencetimeperiodwraptext1Cb() {
	const onClick = useCallback(callbackFactory("experiencetimeperiodwraptext1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperiencearrowwrapimage1Cb() {
	const onClick = useCallback(callbackFactory("experiencearrowwrapimage1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperienceblackbottomborder1Cb() {
	const onClick = useCallback(callbackFactory("experienceblackbottomborder1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperienceitmeheadingtext2Cb() {
	const onClick = useCallback(callbackFactory("experienceitmeheadingtext2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperienceitemheadingwrap2Cb() {
	const onClick = useCallback(callbackFactory("experienceitemheadingwrap2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperienceitmeheadingtext3Cb() {
	const onClick = useCallback(callbackFactory("experienceitmeheadingtext3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperienceitemheadingwrap3Cb() {
	const onClick = useCallback(callbackFactory("experienceitemheadingwrap3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperienceitemsubheadwraptext2Cb() {
	const onClick = useCallback(callbackFactory("experienceitemsubheadwraptext2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperienceitemsubheadingwrap2Cb() {
	const onClick = useCallback(callbackFactory("experienceitemsubheadingwrap2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperienceitemsubheadwraptext3Cb() {
	const onClick = useCallback(callbackFactory("experienceitemsubheadwraptext3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperienceitemsubheadingwrap3Cb() {
	const onClick = useCallback(callbackFactory("experienceitemsubheadingwrap3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperiencetimeperiodwraptext2Cb() {
	const onClick = useCallback(callbackFactory("experiencetimeperiodwraptext2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperiencetimeperiodwrap2Cb() {
	const onClick = useCallback(callbackFactory("experiencetimeperiodwrap2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperiencetimeperiodwraptext3Cb() {
	const onClick = useCallback(callbackFactory("experiencetimeperiodwraptext3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperiencetimeperiodwrap3Cb() {
	const onClick = useCallback(callbackFactory("experiencetimeperiodwrap3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperienceblackbottomborder2Cb() {
	const onClick = useCallback(callbackFactory("experienceblackbottomborder2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperienceblackbottomborder3Cb() {
	const onClick = useCallback(callbackFactory("experienceblackbottomborder3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperiencearrowwrapimage2Cb() {
	const onClick = useCallback(callbackFactory("experiencearrowwrapimage2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperiencearrowwrapper2Cb() {
	const onClick = useCallback(callbackFactory("experiencearrowwrapper2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperiencearrowwrapimage3Cb() {
	const onClick = useCallback(callbackFactory("experiencearrowwrapimage3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useexperiencearrowwrapper3Cb() {
	const onClick = useCallback(callbackFactory("experiencearrowwrapper3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useworkexperienceheadwraptextCb() {
	const onClick = useCallback(callbackFactory("workexperienceheadwraptext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useworkexperienceheadingwrapperCb() {
	const onClick = useCallback(callbackFactory("workexperienceheadingwrapper", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperiencearrowwrapimage3Cb() {
	const onClick = useCallback(callbackFactory("wexperiencearrowwrapimage3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperiencetimeperiodwraptext3Cb() {
	const onClick = useCallback(callbackFactory("wexperiencetimeperiodwraptext3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperienceitemsubheadwraptext3Cb() {
	const onClick = useCallback(callbackFactory("wexperienceitemsubheadwraptext3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperienceitmeheadingtext3Cb() {
	const onClick = useCallback(callbackFactory("wexperienceitmeheadingtext3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperiencearrowwrapimage2Cb() {
	const onClick = useCallback(callbackFactory("wexperiencearrowwrapimage2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperiencetimeperiodwraptext2Cb() {
	const onClick = useCallback(callbackFactory("wexperiencetimeperiodwraptext2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperienceitemsubheadwraptext2Cb() {
	const onClick = useCallback(callbackFactory("wexperienceitemsubheadwraptext2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperienceitmeheadingtext2Cb() {
	const onClick = useCallback(callbackFactory("wexperienceitmeheadingtext2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperiencearrowwrapimage1Cb() {
	const onClick = useCallback(callbackFactory("wexperiencearrowwrapimage1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperiencetimeperiodwraptext1Cb() {
	const onClick = useCallback(callbackFactory("wexperiencetimeperiodwraptext1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperiencearrowwrapper3Cb() {
	const onClick = useCallback(callbackFactory("wexperiencearrowwrapper3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperiencetimeperiodwrap3Cb() {
	const onClick = useCallback(callbackFactory("wexperiencetimeperiodwrap3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperienceblackbottomborder3Cb() {
	const onClick = useCallback(callbackFactory("wexperienceblackbottomborder3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperienceitemsubheadingwrap3Cb() {
	const onClick = useCallback(callbackFactory("wexperienceitemsubheadingwrap3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperienceitemheadingwrap3Cb() {
	const onClick = useCallback(callbackFactory("wexperienceitemheadingwrap3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperiencearrowwrapper2Cb() {
	const onClick = useCallback(callbackFactory("wexperiencearrowwrapper2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperiencetimeperiodwrap2Cb() {
	const onClick = useCallback(callbackFactory("wexperiencetimeperiodwrap2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperienceitemsubheadingwrap2Cb() {
	const onClick = useCallback(callbackFactory("wexperienceitemsubheadingwrap2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperienceitemheadingwrap2Cb() {
	const onClick = useCallback(callbackFactory("wexperienceitemheadingwrap2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperienceblackbottomborder2Cb() {
	const onClick = useCallback(callbackFactory("wexperienceblackbottomborder2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperiencearrowwrapper1Cb() {
	const onClick = useCallback(callbackFactory("wexperiencearrowwrapper1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperiencetimeperiodwrap1Cb() {
	const onClick = useCallback(callbackFactory("wexperiencetimeperiodwrap1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperienceblackbottomborder1Cb() {
	const onClick = useCallback(callbackFactory("wexperienceblackbottomborder1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperiencearrowtimewrap3Cb() {
	const onClick = useCallback(callbackFactory("wexperiencearrowtimewrap3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperiencegreybottomborder3Cb() {
	const onClick = useCallback(callbackFactory("wexperiencegreybottomborder3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperiencearrowtimewrap2Cb() {
	const onClick = useCallback(callbackFactory("wexperiencearrowtimewrap2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperiencegreybottomborder2Cb() {
	const onClick = useCallback(callbackFactory("wexperiencegreybottomborder2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperiencearrowtimewrap1Cb() {
	const onClick = useCallback(callbackFactory("wexperiencearrowtimewrap1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperiencegreybottomborder1Cb() {
	const onClick = useCallback(callbackFactory("wexperiencegreybottomborder1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperienceitemwrapperinline3Cb() {
	const onClick = useCallback(callbackFactory("wexperienceitemwrapperinline3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperienceitemwrapperinline2Cb() {
	const onClick = useCallback(callbackFactory("wexperienceitemwrapperinline2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperienceitemwrapperinline1Cb() {
	const onClick = useCallback(callbackFactory("wexperienceitemwrapperinline1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useworkexperienceitemscontainerCb() {
	const onClick = useCallback(callbackFactory("workexperienceitemscontainer", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperiencedetailscontain1Cb() {
	const onClick = useCallback(callbackFactory("wexperiencedetailscontain1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperienceiconwrap1Cb() {
	const onClick = useCallback(callbackFactory("wexperienceiconwrap1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperienceitmeheadingtext1Cb() {
	const onClick = useCallback(callbackFactory("wexperienceitmeheadingtext1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperienceitemheadingwrap1Cb() {
	const onClick = useCallback(callbackFactory("wexperienceitemheadingwrap1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperienceitemsubheadwraptext1Cb() {
	const onClick = useCallback(callbackFactory("wexperienceitemsubheadwraptext1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperienceitemsubheadingwrap1Cb() {
	const onClick = useCallback(callbackFactory("wexperienceitemsubheadingwrap1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperienceicondetailswrap1Cb() {
	const onClick = useCallback(callbackFactory("wexperienceicondetailswrap1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperienceimg1Cb() {
	const onClick = useCallback(callbackFactory("wexperienceimg1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperienceimg2Cb() {
	const onClick = useCallback(callbackFactory("wexperienceimg2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperienceiconwrap2Cb() {
	const onClick = useCallback(callbackFactory("wexperienceiconwrap2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperienceimg3Cb() {
	const onClick = useCallback(callbackFactory("wexperienceimg3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperienceiconwrap3Cb() {
	const onClick = useCallback(callbackFactory("wexperienceiconwrap3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperiencedetailscontain2Cb() {
	const onClick = useCallback(callbackFactory("wexperiencedetailscontain2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperiencedetailscontain3Cb() {
	const onClick = useCallback(callbackFactory("wexperiencedetailscontain3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperienceicondetailswrap2Cb() {
	const onClick = useCallback(callbackFactory("wexperienceicondetailswrap2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewexperienceicondetailswrap3Cb() {
	const onClick = useCallback(callbackFactory("wexperienceicondetailswrap3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usetestimonialsectionCb() {
	const onClick = useCallback(callbackFactory("testimonialsection", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewraptestimonialheadCb() {
	const onClick = useCallback(callbackFactory("wraptestimonialhead", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewraptestimonialdownCb() {
	const onClick = useCallback(callbackFactory("wraptestimonialdown", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usetestimonialheadwrapCb() {
	const onClick = useCallback(callbackFactory("testimonialheadwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usetestimonialheadsubtextwrapCb() {
	const onClick = useCallback(callbackFactory("testimonialheadsubtextwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usetestimonialheadingtextCb() {
	const onClick = useCallback(callbackFactory("testimonialheadingtext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usetestimonialheadingwraptextCb() {
	const onClick = useCallback(callbackFactory("testimonialheadingwraptext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usetestimonialsliderCb() {
	const onClick = useCallback(callbackFactory("testimonialslider", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usetestimonialslidemaskCb() {
	const onClick = useCallback(callbackFactory("testimonialslidemask", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usetestimonialarrowleftsliderCb() {
	const onClick = useCallback(callbackFactory("testimonialarrowleftslider", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usetestimonialarrowrightsliderCb() {
	const onClick = useCallback(callbackFactory("testimonialarrowrightslider", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usetestimonialslideslideCb() {
	const onClick = useCallback(callbackFactory("testimonialslideslide", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usetestimonialcontainerCb() {
	const onClick = useCallback(callbackFactory("testimonialcontainer", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usetestimonialimagewrapCb() {
	const onClick = useCallback(callbackFactory("testimonialimagewrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usetestimonialcontentCb() {
	const onClick = useCallback(callbackFactory("testimonialcontent", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usetestimonialmainimageCb() {
	const onClick = useCallback(callbackFactory("testimonialmainimage", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usetestimonialquoteiconwrapCb() {
	const onClick = useCallback(callbackFactory("testimonialquoteiconwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usetestimonialcontentwrapCb() {
	const onClick = useCallback(callbackFactory("testimonialcontentwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usetestimonialnameposwrapCb() {
	const onClick = useCallback(callbackFactory("testimonialnameposwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useinvertedcommaimageCb() {
	const onClick = useCallback(callbackFactory("invertedcommaimage", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usetestimonialcontenttextCb() {
	const onClick = useCallback(callbackFactory("testimonialcontenttext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usetestimonialnamewrapCb() {
	const onClick = useCallback(callbackFactory("testimonialnamewrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usetestimonialnametextCb() {
	const onClick = useCallback(callbackFactory("testimonialnametext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usetestimonialblocktextCb() {
	const onClick = useCallback(callbackFactory("testimonialblocktext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usetestimonialarrowiconleftCb() {
	const onClick = useCallback(callbackFactory("testimonialarrowiconleft", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function uselessthanimageCb() {
	const onClick = useCallback(callbackFactory("lessthanimage", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usetestimonialarrowiconrightCb() {
	const onClick = useCallback(callbackFactory("testimonialarrowiconright", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usegreaterthanimageCb() {
	const onClick = useCallback(callbackFactory("greaterthanimage", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useatrilogoCb() {
	const onClick = useCallback(callbackFactory("atrilogo", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useatritextwrapCb() {
	const onClick = useCallback(callbackFactory("atritextwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useatritextCb() {
	const onClick = useCallback(callbackFactory("atritext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useatribadgeCb() {
	const onClick = useCallback(callbackFactory("atribadge", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://docs.atrilabs.com/",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqsectionCb() {
	const onClick = useCallback(callbackFactory("faqsection", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewrapperfaqheadingCb() {
	const onClick = useCallback(callbackFactory("wrapperfaqheading", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewrapperfaqdownCb() {
	const onClick = useCallback(callbackFactory("wrapperfaqdown", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqheadingwrapperCb() {
	const onClick = useCallback(callbackFactory("faqheadingwrapper", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqsubtextwrapperCb() {
	const onClick = useCallback(callbackFactory("faqsubtextwrapper", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqtextboxCb() {
	const onClick = useCallback(callbackFactory("faqtextbox", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqheadtextboxCb() {
	const onClick = useCallback(callbackFactory("faqheadtextbox", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqcontainerCb() {
	const onClick = useCallback(callbackFactory("faqcontainer", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqleftCb() {
	const onClick = useCallback(callbackFactory("faqleft", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqitemcontainer1Cb() {
	const onClick = useCallback(callbackFactory("faqitemcontainer1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqquestionarrowwrap1Cb() {
	const onClick = useCallback(callbackFactory("faqquestionarrowwrap1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqquestionwrapper1Cb() {
	const onClick = useCallback(callbackFactory("faqquestionwrapper1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqquestiontextbox1Cb() {
	const onClick = useCallback(callbackFactory("faqquestiontextbox1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqiconwrapper1Cb() {
	const onClick = useCallback(callbackFactory("faqiconwrapper1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usearrowdownimg1Cb() {
	const onClick = useCallback(callbackFactory("arrowdownimg1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usearrowdownimg2Cb() {
	const onClick = useCallback(callbackFactory("arrowdownimg2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqquestiontextbox2Cb() {
	const onClick = useCallback(callbackFactory("faqquestiontextbox2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqiconwrapper2Cb() {
	const onClick = useCallback(callbackFactory("faqiconwrapper2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqquestionwrapper2Cb() {
	const onClick = useCallback(callbackFactory("faqquestionwrapper2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqquestionarrowwrap2Cb() {
	const onClick = useCallback(callbackFactory("faqquestionarrowwrap2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqitemcontainer2Cb() {
	const onClick = useCallback(callbackFactory("faqitemcontainer2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usearrowdownimg3Cb() {
	const onClick = useCallback(callbackFactory("arrowdownimg3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqquestiontextbox3Cb() {
	const onClick = useCallback(callbackFactory("faqquestiontextbox3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqiconwrapper3Cb() {
	const onClick = useCallback(callbackFactory("faqiconwrapper3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqquestionwrapper3Cb() {
	const onClick = useCallback(callbackFactory("faqquestionwrapper3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqquestionarrowwrap3Cb() {
	const onClick = useCallback(callbackFactory("faqquestionarrowwrap3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqitemcontainer3Cb() {
	const onClick = useCallback(callbackFactory("faqitemcontainer3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usearrowdownimg4Cb() {
	const onClick = useCallback(callbackFactory("arrowdownimg4", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqquestiontextbox4Cb() {
	const onClick = useCallback(callbackFactory("faqquestiontextbox4", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqiconwrapper4Cb() {
	const onClick = useCallback(callbackFactory("faqiconwrapper4", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqquestionwrapper4Cb() {
	const onClick = useCallback(callbackFactory("faqquestionwrapper4", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqquestionarrowwrap4Cb() {
	const onClick = useCallback(callbackFactory("faqquestionarrowwrap4", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqitemcontainer4Cb() {
	const onClick = useCallback(callbackFactory("faqitemcontainer4", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqanswer1Cb() {
	const onClick = useCallback(callbackFactory("faqanswer1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqanswerpara1Cb() {
	const onClick = useCallback(callbackFactory("faqanswerpara1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqanswerpara2Cb() {
	const onClick = useCallback(callbackFactory("faqanswerpara2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqanswer2Cb() {
	const onClick = useCallback(callbackFactory("faqanswer2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqanswerpara3Cb() {
	const onClick = useCallback(callbackFactory("faqanswerpara3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqanswer3Cb() {
	const onClick = useCallback(callbackFactory("faqanswer3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqanswerpara4Cb() {
	const onClick = useCallback(callbackFactory("faqanswerpara4", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqanswer4Cb() {
	const onClick = useCallback(callbackFactory("faqanswer4", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userfaqquestiontextbox4Cb() {
	const onClick = useCallback(callbackFactory("rfaqquestiontextbox4", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userarrowdownimg4Cb() {
	const onClick = useCallback(callbackFactory("rarrowdownimg4", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userfaqquestiontextbox3Cb() {
	const onClick = useCallback(callbackFactory("rfaqquestiontextbox3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userarrowdownimg3Cb() {
	const onClick = useCallback(callbackFactory("rarrowdownimg3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userfaqquestiontextbox2Cb() {
	const onClick = useCallback(callbackFactory("rfaqquestiontextbox2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userarrowdownimg2Cb() {
	const onClick = useCallback(callbackFactory("rarrowdownimg2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userarrowdownimg1Cb() {
	const onClick = useCallback(callbackFactory("rarrowdownimg1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userfaqquestiontextbox1Cb() {
	const onClick = useCallback(callbackFactory("rfaqquestiontextbox1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userfaqanswerpara4Cb() {
	const onClick = useCallback(callbackFactory("rfaqanswerpara4", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userfaqquestionwrapper4Cb() {
	const onClick = useCallback(callbackFactory("rfaqquestionwrapper4", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userfaqiconwrapper4Cb() {
	const onClick = useCallback(callbackFactory("rfaqiconwrapper4", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userfaqanswerpara3Cb() {
	const onClick = useCallback(callbackFactory("rfaqanswerpara3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userfaqquestionwrapper3Cb() {
	const onClick = useCallback(callbackFactory("rfaqquestionwrapper3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userfaqiconwrapper3Cb() {
	const onClick = useCallback(callbackFactory("rfaqiconwrapper3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userfaqanswerpara2Cb() {
	const onClick = useCallback(callbackFactory("rfaqanswerpara2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userfaqquestionwrapper2Cb() {
	const onClick = useCallback(callbackFactory("rfaqquestionwrapper2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userfaqiconwrapper2Cb() {
	const onClick = useCallback(callbackFactory("rfaqiconwrapper2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userfaqanswerpara1Cb() {
	const onClick = useCallback(callbackFactory("rfaqanswerpara1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userfaqiconwrapper1Cb() {
	const onClick = useCallback(callbackFactory("rfaqiconwrapper1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userfaqquestionwrapper1Cb() {
	const onClick = useCallback(callbackFactory("rfaqquestionwrapper1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userfaqanswer4Cb() {
	const onClick = useCallback(callbackFactory("rfaqanswer4", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userfaqquestionarrowwrap4Cb() {
	const onClick = useCallback(callbackFactory("rfaqquestionarrowwrap4", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userfaqanswer3Cb() {
	const onClick = useCallback(callbackFactory("rfaqanswer3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userfaqquestionarrowwrap3Cb() {
	const onClick = useCallback(callbackFactory("rfaqquestionarrowwrap3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userfaqanswer2Cb() {
	const onClick = useCallback(callbackFactory("rfaqanswer2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userfaqquestionarrowwrap2Cb() {
	const onClick = useCallback(callbackFactory("rfaqquestionarrowwrap2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userfaqanswer1Cb() {
	const onClick = useCallback(callbackFactory("rfaqanswer1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userfaqquestionarrowwrap1Cb() {
	const onClick = useCallback(callbackFactory("rfaqquestionarrowwrap1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userfaqitemcontainer4Cb() {
	const onClick = useCallback(callbackFactory("rfaqitemcontainer4", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userfaqitemcontainer3Cb() {
	const onClick = useCallback(callbackFactory("rfaqitemcontainer3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userfaqitemcontainer2Cb() {
	const onClick = useCallback(callbackFactory("rfaqitemcontainer2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function userfaqitemcontainer1Cb() {
	const onClick = useCallback(callbackFactory("rfaqitemcontainer1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefaqrightCb() {
	const onClick = useCallback(callbackFactory("faqright", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefootersectionCb() {
	const onClick = useCallback(callbackFactory("footersection", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usewrapperfooterCb() {
	const onClick = useCallback(callbackFactory("wrapperfooter", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterheadingwrapCb() {
	const onClick = useCallback(callbackFactory("footerheadingwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usesubfooterwrapperCb() {
	const onClick = useCallback(callbackFactory("subfooterwrapper", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooteraddresslinkswrapCb() {
	const onClick = useCallback(callbackFactory("footeraddresslinkswrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterheadingCb() {
	const onClick = useCallback(callbackFactory("footerheading", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterlinkwrapCb() {
	const onClick = useCallback(callbackFactory("footerlinkwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterctaCb() {
	const onClick = useCallback(callbackFactory("footercta", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterlineCb() {
	const onClick = useCallback(callbackFactory("footerline", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooteraddresswrapCb() {
	const onClick = useCallback(callbackFactory("footeraddresswrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterlinksgridCb() {
	const onClick = useCallback(callbackFactory("footerlinksgrid", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterlogowrapinlineCb() {
	const onClick = useCallback(callbackFactory("footerlogowrapinline", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "internal",
        "url": "/"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterparagraphCb() {
	const onClick = useCallback(callbackFactory("footerparagraph", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usecontactemailfooterCb() {
	const onClick = useCallback(callbackFactory("contactemailfooter", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterlogoCb() {
	const onClick = useCallback(callbackFactory("footerlogo", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "/",
        "target": "_self"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooteremailimagewrapCb() {
	const onClick = useCallback(callbackFactory("footeremailimagewrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterimagetextCb() {
	const onClick = useCallback(callbackFactory("footerimagetext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useemaillogoimageCb() {
	const onClick = useCallback(callbackFactory("emaillogoimage", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterlinkaboutCb() {
	const onClick = useCallback(callbackFactory("footerlinkabout", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterabouttextCb() {
	const onClick = useCallback(callbackFactory("footerabouttext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterlinkbottomborder1Cb() {
	const onClick = useCallback(callbackFactory("footerlinkbottomborder1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterlinkbottomborder2Cb() {
	const onClick = useCallback(callbackFactory("footerlinkbottomborder2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterservicetextCb() {
	const onClick = useCallback(callbackFactory("footerservicetext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterlinkserviceCb() {
	const onClick = useCallback(callbackFactory("footerlinkservice", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterlinkbottomborder3Cb() {
	const onClick = useCallback(callbackFactory("footerlinkbottomborder3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterexperiencetextCb() {
	const onClick = useCallback(callbackFactory("footerexperiencetext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterlinkexperienceCb() {
	const onClick = useCallback(callbackFactory("footerlinkexperience", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterlinkbottomborder4Cb() {
	const onClick = useCallback(callbackFactory("footerlinkbottomborder4", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefootercontacttextCb() {
	const onClick = useCallback(callbackFactory("footercontacttext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterlinkcontactCb() {
	const onClick = useCallback(callbackFactory("footerlinkcontact", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterlinkbottomborder5Cb() {
	const onClick = useCallback(callbackFactory("footerlinkbottomborder5", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterblogtextCb() {
	const onClick = useCallback(callbackFactory("footerblogtext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterlinkblogCb() {
	const onClick = useCallback(callbackFactory("footerlinkblog", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterlinkbottomborder6Cb() {
	const onClick = useCallback(callbackFactory("footerlinkbottomborder6", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterprojectstextCb() {
	const onClick = useCallback(callbackFactory("footerprojectstext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterlinkprojectsCb() {
	const onClick = useCallback(callbackFactory("footerlinkprojects", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterlinkbottomborder7Cb() {
	const onClick = useCallback(callbackFactory("footerlinkbottomborder7", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterdribbletextCb() {
	const onClick = useCallback(callbackFactory("footerdribbletext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterlinkdribbleCb() {
	const onClick = useCallback(callbackFactory("footerlinkdribble", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterlinkbottomborder8Cb() {
	const onClick = useCallback(callbackFactory("footerlinkbottomborder8", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterinstagramtextCb() {
	const onClick = useCallback(callbackFactory("footerinstagramtext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterlinkinstagramCb() {
	const onClick = useCallback(callbackFactory("footerlinkinstagram", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterlinkbottomborder9Cb() {
	const onClick = useCallback(callbackFactory("footerlinkbottomborder9", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefootertwittertextCb() {
	const onClick = useCallback(callbackFactory("footertwittertext", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterlinktwittersCb() {
	const onClick = useCallback(callbackFactory("footerlinktwitters", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefootercopyrightsCb() {
	const onClick = useCallback(callbackFactory("footercopyrights", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterconversionflowCb() {
	const onClick = useCallback(callbackFactory("footerconversionflow", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterpoweredbyCb() {
	const onClick = useCallback(callbackFactory("footerpoweredby", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefootriatriCb() {
	const onClick = useCallback(callbackFactory("footriatri", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://atrilabs.com/",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterslash1Cb() {
	const onClick = useCallback(callbackFactory("footerslash1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterimagelicenseinfoCb() {
	const onClick = useCallback(callbackFactory("footerimagelicenseinfo", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterslash2Cb() {
	const onClick = useCallback(callbackFactory("footerslash2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterinstructionsCb() {
	const onClick = useCallback(callbackFactory("footerinstructions", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterslash3Cb() {
	const onClick = useCallback(callbackFactory("footerslash3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterchangelogCb() {
	const onClick = useCallback(callbackFactory("footerchangelog", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterslash4Cb() {
	const onClick = useCallback(callbackFactory("footerslash4", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefooterstyleguideCb() {
	const onClick = useCallback(callbackFactory("footerstyleguide", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usesubfootertextCb() {
	const onClick = useCallback(callbackFactory("subfootertext", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectsectionsliderCb() {
	const onClick = useCallback(callbackFactory("projectsectionslider", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslidermaskCb() {
	const onClick = useCallback(callbackFactory("projectslidermask", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectsectionslide1Cb() {
	const onClick = useCallback(callbackFactory("projectsectionslide1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslideimagewrap1Cb() {
	const onClick = useCallback(callbackFactory("projectslideimagewrap1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslidecontent1Cb() {
	const onClick = useCallback(callbackFactory("projectslidecontent1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslidelinkblock1Cb() {
	const onClick = useCallback(callbackFactory("projectslidelinkblock1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslideimageupload1Cb() {
	const onClick = useCallback(callbackFactory("projectslideimageupload1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslideheadwrap1Cb() {
	const onClick = useCallback(callbackFactory("projectslideheadwrap1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslidetagwrap1Cb() {
	const onClick = useCallback(callbackFactory("projectslidetagwrap1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useviewprojectdiv1Cb() {
	const onClick = useCallback(callbackFactory("viewprojectdiv1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslidetagtext1Cb() {
	const onClick = useCallback(callbackFactory("projectslidetagtext1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslideheadingtext1Cb() {
	const onClick = useCallback(callbackFactory("projectslideheadingtext1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useviewprojecttextbox1Cb() {
	const onClick = useCallback(callbackFactory("viewprojecttextbox1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useviewprojectarrowwrap1Cb() {
	const onClick = useCallback(callbackFactory("viewprojectarrowwrap1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useviewprojectimagearrow1Cb() {
	const onClick = useCallback(callbackFactory("viewprojectimagearrow1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useviewprojectimagearrow4Cb() {
	const onClick = useCallback(callbackFactory("viewprojectimagearrow4", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useviewprojectarrowwrap4Cb() {
	const onClick = useCallback(callbackFactory("viewprojectarrowwrap4", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useviewprojecttextbox4Cb() {
	const onClick = useCallback(callbackFactory("viewprojecttextbox4", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslidetagtext4Cb() {
	const onClick = useCallback(callbackFactory("projectslidetagtext4", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslideheadingtext4Cb() {
	const onClick = useCallback(callbackFactory("projectslideheadingtext4", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useviewprojectdiv4Cb() {
	const onClick = useCallback(callbackFactory("viewprojectdiv4", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslidetagwrap4Cb() {
	const onClick = useCallback(callbackFactory("projectslidetagwrap4", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslideheadwrap4Cb() {
	const onClick = useCallback(callbackFactory("projectslideheadwrap4", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslideimageupload4Cb() {
	const onClick = useCallback(callbackFactory("projectslideimageupload4", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslidecontent4Cb() {
	const onClick = useCallback(callbackFactory("projectslidecontent4", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslideimagewrap4Cb() {
	const onClick = useCallback(callbackFactory("projectslideimagewrap4", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslidelinkblock4Cb() {
	const onClick = useCallback(callbackFactory("projectslidelinkblock4", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectsectionslide4Cb() {
	const onClick = useCallback(callbackFactory("projectsectionslide4", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useviewprojectimagearrow5Cb() {
	const onClick = useCallback(callbackFactory("viewprojectimagearrow5", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useviewprojectarrowwrap5Cb() {
	const onClick = useCallback(callbackFactory("viewprojectarrowwrap5", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useviewprojecttextbox5Cb() {
	const onClick = useCallback(callbackFactory("viewprojecttextbox5", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslidetagtext5Cb() {
	const onClick = useCallback(callbackFactory("projectslidetagtext5", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslideheadingtext5Cb() {
	const onClick = useCallback(callbackFactory("projectslideheadingtext5", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useviewprojectdiv5Cb() {
	const onClick = useCallback(callbackFactory("viewprojectdiv5", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslidetagwrap5Cb() {
	const onClick = useCallback(callbackFactory("projectslidetagwrap5", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslideheadwrap5Cb() {
	const onClick = useCallback(callbackFactory("projectslideheadwrap5", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslideimageupload5Cb() {
	const onClick = useCallback(callbackFactory("projectslideimageupload5", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslidecontent5Cb() {
	const onClick = useCallback(callbackFactory("projectslidecontent5", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslideimagewrap5Cb() {
	const onClick = useCallback(callbackFactory("projectslideimagewrap5", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslidelinkblock5Cb() {
	const onClick = useCallback(callbackFactory("projectslidelinkblock5", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectsectionslide5Cb() {
	const onClick = useCallback(callbackFactory("projectsectionslide5", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useviewprojectimagearrow2Cb() {
	const onClick = useCallback(callbackFactory("viewprojectimagearrow2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useviewprojectarrowwrap2Cb() {
	const onClick = useCallback(callbackFactory("viewprojectarrowwrap2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useviewprojecttextbox2Cb() {
	const onClick = useCallback(callbackFactory("viewprojecttextbox2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslidetagtext2Cb() {
	const onClick = useCallback(callbackFactory("projectslidetagtext2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslideheadingtext2Cb() {
	const onClick = useCallback(callbackFactory("projectslideheadingtext2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useviewprojectdiv2Cb() {
	const onClick = useCallback(callbackFactory("viewprojectdiv2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslidetagwrap2Cb() {
	const onClick = useCallback(callbackFactory("projectslidetagwrap2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslideheadwrap2Cb() {
	const onClick = useCallback(callbackFactory("projectslideheadwrap2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslideimageupload2Cb() {
	const onClick = useCallback(callbackFactory("projectslideimageupload2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslidecontent2Cb() {
	const onClick = useCallback(callbackFactory("projectslidecontent2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslideimagewrap2Cb() {
	const onClick = useCallback(callbackFactory("projectslideimagewrap2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslidelinkblock2Cb() {
	const onClick = useCallback(callbackFactory("projectslidelinkblock2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectsectionslide2Cb() {
	const onClick = useCallback(callbackFactory("projectsectionslide2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useviewprojectimagearrow3Cb() {
	const onClick = useCallback(callbackFactory("viewprojectimagearrow3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useviewprojectarrowwrap3Cb() {
	const onClick = useCallback(callbackFactory("viewprojectarrowwrap3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useviewprojecttextbox3Cb() {
	const onClick = useCallback(callbackFactory("viewprojecttextbox3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslidetagtext3Cb() {
	const onClick = useCallback(callbackFactory("projectslidetagtext3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslideheadingtext3Cb() {
	const onClick = useCallback(callbackFactory("projectslideheadingtext3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useviewprojectdiv3Cb() {
	const onClick = useCallback(callbackFactory("viewprojectdiv3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslidetagwrap3Cb() {
	const onClick = useCallback(callbackFactory("projectslidetagwrap3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslideheadwrap3Cb() {
	const onClick = useCallback(callbackFactory("projectslideheadwrap3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslideimageupload3Cb() {
	const onClick = useCallback(callbackFactory("projectslideimageupload3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslidecontent3Cb() {
	const onClick = useCallback(callbackFactory("projectslidecontent3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslideimagewrap3Cb() {
	const onClick = useCallback(callbackFactory("projectslideimagewrap3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectslidelinkblock3Cb() {
	const onClick = useCallback(callbackFactory("projectslidelinkblock3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectsectionslide3Cb() {
	const onClick = useCallback(callbackFactory("projectsectionslide3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectsliderleftarrowCb() {
	const onClick = useCallback(callbackFactory("projectsliderleftarrow", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectsliderrightarrowCb() {
	const onClick = useCallback(callbackFactory("projectsliderrightarrow", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectsliderleftarrowiconwrapCb() {
	const onClick = useCallback(callbackFactory("projectsliderleftarrowiconwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useprojectsliderrightarrowiconwrapCb() {
	const onClick = useCallback(callbackFactory("projectsliderrightarrowiconwrap", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function uselessthanblackimageCb() {
	const onClick = useCallback(callbackFactory("lessthanblackimage", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usegreaterthanblackimageCb() {
	const onClick = useCallback(callbackFactory("greaterthanblackimage", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}