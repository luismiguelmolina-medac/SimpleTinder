import { use, useContext, useEffect } from "react";
import { CardContext } from "../contexts/CardContext";
import { animate } from "animejs";

export function SwipeCard(like, setProfile, setLike) {
    const { cardRef } = useContext(CardContext);

    useEffect(() => {
        if (cardRef.current) {
            if (like > 0) {
                animate(cardRef.current, {
                    translateX: -600,
                    translateY: 80,
                    rotate: -20,
                    opacity: 0,
                    duration: 700,
                    easing: "easeInOutCubic"
                }).then(() => {
                    setLike(0);
                    if (setProfile) setProfile(null);
                });
            }
            if (like < 0) {
                animate(cardRef.current, {
                    translateX: 600,
                    translateY: 80,
                    rotate: 20,
                    opacity: 0,
                    duration: 700,
                    easing: "easeInOutCubic"
                }).then(() => {
                    setLike(0);
                    if (setProfile) setProfile(null);
                });
            }
        }
    }, [like]);
}