function About() {
    return (
        <>
            <div
                style={{
                    maxWidth: "900px",
                    margin: "auto",
                    padding: "40px 20px",
                    fontFamily: "Arial, sans-serif",
                    lineHeight: "1.6",
                    color: "#333"
                }}
            >
                <h2
                    style={{
                        fontSize: "2.5rem",
                        textAlign: "center",
                        marginBottom: "10px",
                        fontWeight: "bold",
                        letterSpacing: "2px"
                    }}
                >
                    ABOUT
                </h2>

                <hr style={{ width: "60%", margin: "0 auto 40px auto", opacity: 0.4 }} />

                <section>

                    {/* WHY SECTION */}
                    <section
                        style={{
                            backgroundColor: "#f8f9fc",
                            padding: "25px",
                            borderRadius: "12px",
                            boxShadow: "0 3px 8px rgba(0,0,0,0.12)",
                            marginBottom: "40px"
                        }}
                    >
                        <h1
                            style={{
                                fontSize: "1.8rem",
                                marginBottom: "10px",
                                fontWeight: "600",
                                color: "#000000ff"
                            }}
                        >
                            Why I Built It
                        </h1>

                        <p style={{ fontSize: "1.1rem", marginBottom: "15px" }}>
                            Ordering plain film X-rays should not feel like guesswork. 
                            X-ACT ORDER puts the exact exam name and view list at your fingertips, 
                            so exams can be ordered correctly the first time.
                        </p>

                        <ul style={{ paddingLeft: "20px", fontSize: "1.05rem" }}>
                            <li>Eliminates incorrect ordered exams</li>
                            <li>Reduces callbacks and rewritten orders</li>
                            <li>Saves time on looking up procedures</li>
                        </ul>
                    </section>

                    {/* WHO SECTION */}
                    <section
                        style={{
                            backgroundColor: "#f8f9fc",
                            padding: "25px",
                            borderRadius: "12px",
                            boxShadow: "0 3px 8px rgba(0,0,0,0.12)",
                            marginBottom: "40px"
                        }}
                    >
                        <h1
                            style={{
                                fontSize: "1.8rem",
                                marginBottom: "15px",
                                fontWeight: "600",
                                color: "#000000ff"
                            }}
                        >
                            Who It's For
                        </h1>

                        <table
                            style={{
                                width: "100%",
                                borderCollapse: "collapse",
                                fontSize: "1.05rem",
                                backgroundColor: "white",
                                borderRadius: "8px",
                                overflow: "hidden",
                                boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
                            }}
                        >
                            <thead style={{ backgroundColor: "#53557dff" }}>
                                <tr>
                                    <th
                                        style={{
                                            padding: "12px",
                                            textAlign: "left",
                                            fontWeight: "600",
                                            color: "#ffffffff"
                                        }}
                                    >
                                        Role
                                    </th>
                                    <th
                                        style={{
                                            padding: "12px",
                                            textAlign: "left",
                                            fontWeight: "600",
                                            color: "#ffffffff"
                                        }}
                                    >
                                        Purpose
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {[
                                    ["Physicians", "Order X-Ray procedures with correct exam wording"],
                                    ["Nurses", "Save common exams for quick ordering"],
                                    ["Rad Techs", "Get procedural information such as views for exam preperation"],
                                    ["Students", "Discover standard view groupings interactively"],
                                    ["Anyone", "Find out about x-ray exams"]
                                ].map(([role, purpose], i) => (
                                    <tr
                                        key={i}
                                        style={{
                                            backgroundColor:"#fafafa"
                                        }}
                                    >
                                        <td style={{ padding: "12px" }}>{role}</td>
                                        <td style={{ padding: "12px" }}>{purpose}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>

                    <hr style={{ margin: "40px 0", opacity: 0.4 }} />

                    {/* DISCLAIMERS */}
                    <section
                        style={{
                            backgroundColor: "#f8f9fc",
                            padding: "25px",
                            borderRadius: "12px",
                            boxShadow: "0 3px 8px rgba(0,0,0,0.12)",
                            marginBottom: "40px"
                        }}
                    >
                        <h1
                            style={{
                                fontSize: "1.8rem",
                                marginBottom: "10px",
                                fontWeight: "600",
                                color: "#000000ff"
                            }}
                        >
                            Disclaimers
                        </h1>

                        <p style={{ fontSize: "1.05rem" }}>
                            X-ACT ORDER is an educational support tool, not a substitute for clinical
                            judgment or institutional policy. Protocols reflect common practice; follow your 
                            facility's guidelines when they differ. No patient data is stored in the application.
                        </p>
                    </section>

                    {/* BUILT BY */}
                    <section
                        style={{
                            textAlign: "center",
                            backgroundColor: "#f8f9fc",
                            padding: "20px",
                            borderRadius: "12px",
                            boxShadow: "0 3px 8px rgba(0,0,0,0.12)"
                        }}
                    >
                        <h1
                            style={{
                                fontSize: "1.8rem",
                                marginBottom: "10px",
                                fontWeight: "600",
                                color: "#000000ff"
                            }}
                        >
                            Built By
                        </h1>

                        <p style={{ fontSize: "1.1rem", margin: "6px 0" }}>Bryan Jimenez</p>
                        <p style={{ fontSize: "1.05rem", opacity: 0.85 }}>
                            Radiologic Technologist R.T. (R) | 
                            LaunchCode Software Development Student
                        </p>
                    </section>

                </section>
            </div>
        </>
    );
}

export default About;
