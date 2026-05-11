import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// 🔁 Mapping (mesh → logical region)
const REGION_MAP = {
  Head: ["Head"],

  FrontNeck: ["Front_Neck"],
  BackNeck: ["Back_Neck"],

  Chest: ["Chest"],
  UpperBack: ["Upper_Back"],
  LowerBack: ["Lower_Back"],

  Abdomen: ["Abdomen"],

  FrontPelvic: ["Front_Pelvic"],
  RearPelvic: ["Rear_Pelvic"],

  RightShoulder: ["Right_Shoulder"],
  RightArm: ["Right_Arm"],
  RightElbow: ["Right_Elbow"],
  RightForearm: ["Right_Forearm"],
  RightWrist: ["Right_Wrist"],
  RightHand: ["Right_Hand"],

  LeftShoulder: ["Left_Shoulder"],
  LeftArm: ["Left_Arm"],
  LeftElbow: ["Left_Elbow"],
  LeftForearm: ["Left_Forearm"],
  LeftWrist: ["Left_Wrist"],
  LeftHand: ["Left_Hand"],

  RightUpperLeg: ["Right_Upper_Leg"],
  RightKnee: ["Right_Knee"],
  RightLeg_Pit: ["Right_Leg_Pit"],
  RightLowerLeg: ["Right_Lower_Leg"],
  RightAnkle: ["Right_Ankle"],
  RightFoot: ["Right_Foot"],

  LeftUpperLeg: ["Left_Upper_Leg"],
  LeftKnee: ["Left_Knee"],
  LeftLeg_Pit: ["Left_Leg_Pit"],
  LeftLowerLeg: ["Left_Lower_Leg"],
  LeftAnkle: ["Left_Ankle"],
  LeftFoot: ["Left_Foot"]
};

// 📦 UI GROUPS (ONLY for buttons)
const UI_GROUPS = {
  Head: ["Head"],

  Neck: ["FrontNeck", "BackNeck"],

  Chest: ["Chest"],

  Back: ["UpperBack", "LowerBack"],

  Abdomen: ["Abdomen"],

  Pelvis: ["FrontPelvic", "RearPelvic"],

  Joints: [
    "RightShoulder", "LeftShoulder",
    "RightElbow", "LeftElbow",
    "RightWrist", "LeftWrist",
    "RightKnee", "LeftKnee",
    "RightAnkle", "LeftAnkle",
    "RightLeg_Pit", "LeftLeg_Pit"
  ],

  Limbs: [
    "RightArm", "LeftArm",
    "RightForearm", "LeftForearm",
    "RightHand", "LeftHand",
    "RightUpperLeg", "LeftUpperLeg",
    "RightLowerLeg", "LeftLowerLeg",
    "RightFoot", "LeftFoot"
  ]
};

// 🔎 mesh → region
const findRegionKey = (meshName) => {
  for (const key in REGION_MAP) {
    if (REGION_MAP[key].includes(meshName)) {
      return key;
    }
  }
  return meshName;
};

// 🎯 3D MODEL
function Model({ selectedRegions, onSelect, isExpanded, isMobile }) {
  const { scene } = useGLTF("/models/human5.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        if (!child.userData.init) {
          child.material = child.material.clone();
          child.userData.originalColor = child.material.color.clone();
          child.userData.init = true;
        }

        const isActive = selectedRegions.some(region =>
          REGION_MAP[region]?.includes(child.name)
        );

        if (isActive) {
          child.material.color.set("#ef4444");
        } else {
          child.material.color.copy(child.userData.originalColor);
        }
      }
    });
  }, [scene, selectedRegions]);

  return (
    <primitive
      object={scene}
      scale={
        isExpanded
          ? (isMobile ? 1.5 : 2)
          : (isMobile ? 2 : 2)
      }
      position={
        isExpanded
          ? (isMobile ? [0, -1.4, 0] : [0, -1.8, 0])
          : (isMobile ? [0, -1.8, 0] : [0, -1.8, 0])
      }
      onClick={(e) => {
        e.stopPropagation();

        const meshName = e.object.name;
        const regionKey = findRegionKey(meshName);

        let newSelection = [...selectedRegions];

        if (newSelection.includes(regionKey)) {
          newSelection = newSelection.filter(r => r !== regionKey);
        } else {
          newSelection.push(regionKey);
        }

        onSelect(newSelection);
      }}
    />
  );
}

// 🎬 MAIN COMPONENT
export default function BodyMap3D({
  selectedRegion = [],
  onSelect,
  isMobile = false
}) {
  const [openGroups, setOpenGroups] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const closeExpand = () => setIsExpanded(false);
  const openExpand = () => setIsExpanded(true);
  const toggleExpand = () => setIsExpanded(prev => !prev);

  useEffect(() => {
    if (!isExpanded) {
      setOpenGroups([]); // optional reset
      window.dispatchEvent(new Event("resize"));
    }
  }, [isExpanded]);

  const toggleGroupOpen = (group) => {
    setOpenGroups((prev) =>
      prev.includes(group)
        ? prev.filter((g) => g !== group)
        : [...prev, group]
    );
  };

  const canvasUI = (
    <div style={{ flex: 1, height: isExpanded ? "80vh" : "400px" }}>
      <Canvas
        key={isExpanded ? "expanded" : "normal"}
        camera={{
          position: isExpanded
            ? (isMobile ? [0, 0.5, 2.6] : [0, 1.3, 2.2])
            : (isMobile ? [0, 1.3, 2.2] : [0, 1.3, 2.2])
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} />

        <Model
          selectedRegions={selectedRegion}
          onSelect={onSelect}
          isExpanded={isExpanded}
          isMobile={isMobile}
        />

        <OrbitControls
          enableZoom
          minDistance={1.5}
          maxDistance={4}
        />
      </Canvas>
    </div>
  );

  return (
    <>
      {/* BACKGROUND DIM (ONLY WHEN EXPANDED) */}
      {isExpanded && (
        <div
          onClick={toggleExpand}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.6)",
            zIndex: 999
          }}
        />
      )}

      {/* MODAL WRAPPER */}
      <div
        style={{
          position: isExpanded ? "fixed" : "relative",
          top: isExpanded ? "50%" : "auto",
          left: isExpanded ? "50%" : "auto",
          transform: isExpanded ? "translate(-50%, -50%)" : "none",
          width: isExpanded ? "90vw" : "100%",
          maxWidth: isExpanded ? "none" : isMobile ? "250px" : "590px",
          height: isExpanded ? "90vh" : "auto",
          minHeight: "0",
          pointerEvents: "auto",
          margin: isExpanded ? "0" : "0 auto",
          background: "#ffffff",
          borderRadius: "16px",
          padding: "16px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
          zIndex: 1000,
          overflow: "hidden"
        }}
      >
        {isMobile && isExpanded && (
          <div
            style={{
              position: "absolute",
              top: "16px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(195, 26, 26, 0.7)",
              color: "white",
              padding: "6px 14px",
              borderRadius: "999px",
              fontSize: "18px",
              zIndex: 1002,
              pointerEvents: "none"
            }}
          >
            Press on the body parts 👇
          </div>
        )}
        {/* HEADER BUTTONS */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            zIndex: 1001
          }}
        >
          {/* EXPAND BUTTON */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              border: "none",
              background: "rgba(129, 129, 129, 0.9)",
              padding: "8px 10px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
          >
            {isExpanded ? "✕" : "⛶"}
          </button>
        </div>

        {/* MAIN CONTENT */}
        <div
          style={{
            display: "flex",
            flexDirection: isExpanded
              ? (isMobile ? "column" : "row")
              : (isMobile ? "column" : "row"),
            height: isExpanded ? "100%" : "auto",
            gap: "16px"
          }}
        >
          {/* 3D VIEW */}
          {canvasUI}

          {/* UI PANEL (same as your existing code) */}
          {!(isMobile && isExpanded) && (
          <div
            style={{
              width: isMobile ? "100%" : "220px",
              height: isExpanded ? "100%" : "400px",
              minHeight: "0",
              flexShrink: 0,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}
          >
          {Object.keys(UI_GROUPS).map((group) => {
            const isOpen = openGroups.includes(group);

            return (
              <div key={group}>
                {/* GROUP BUTTON */}
                <button
                  onClick={() => toggleGroupOpen(group)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    fontSize: "14px",
                    fontWeight: "600",
                    backgroundColor: "#5b729f",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                    <span>{group}</span>

                    <span style={{ fontSize: "14px" }}>
                        {isOpen ? "˄" : "˅"}
                    </span>
                </button>

                {/* SUB ITEMS */}
                {isOpen && (
                  <div style={{ paddingLeft: "10px", marginTop: "6px" }}>
                    {UI_GROUPS[group].map((part) => {
                      const isSelected = selectedRegion.includes(part);

                      return (
                        <button
                          key={part}
                          onClick={() => {
                            let newSelection = [...selectedRegion];

                            if (isSelected) {
                              newSelection = newSelection.filter(
                                (p) => p !== part
                              );
                            } else {
                              newSelection.push(part);
                            }

                            onSelect(newSelection);
                          }}
                          style={{
                            width: "100%",
                            padding: "8px",
                            marginBottom: "4px",
                            borderRadius: "6px",
                            border: "none",
                            cursor: "pointer",
                            textAlign: "left",
                            fontSize: "13px",
                            backgroundColor: isSelected
                              ? "#ef4444"
                              : "#f3f4f6",
                            color: isSelected ? "white" : "#111827"
                          }}
                        >
                          {part
                            .replace(/([A-Z])/g, " $1")
                            .replace(/_/g, " ")
                            .replace(/^./, (s) => s.toUpperCase())
                            .trim()}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {/* CLEAR */}
          {selectedRegion.length > 0 && (
            <button
              onClick={() => onSelect([])}
              style={{
                marginTop: "10px",
                padding: "10px",
                backgroundColor: "#111827",
                color: "white",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer"
              }}
            >
              Clear All ({selectedRegion.length})
            </button>
          )}
        </div>)}
      </div>
    </div>
    </>
  );
}