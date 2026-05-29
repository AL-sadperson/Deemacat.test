const btn = document.getElementById('chaos-btn');

function revealTruth() {
    const mainContainer = document.querySelector('.container');
    mainContainer.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CIPHER GLOBAL // THE THERAPRISM TERMINAL</title>
    <style>
        /* لوحة ألوان طائفة بيل شيفير */
        :root {
            --bg-dark: #000000;
            --panel-amber: #cca300; /* أصفر ذهبي معتم */
            --text-gold: #ffcc00;
            --text-dim: #8a816f;
            --blood-red: #b30000;
            --border-heavy: #332900;
            --bg-panel: #050400;
        }

        body {
            background-color: var(--bg-dark);
            color: var(--text-dim);
            font-family: 'Courier New', Courier, monospace;
            margin: 0;
            padding: 0; /* تمت إزالة الهوامش المزعجة */
            text-transform: uppercase;
            overflow-x: hidden;
            height: 100vh;
            display: flex;
            flex-direction: column;
        }

        /* تأثير الشاشة القديمة والتشويش */
        body::before {
            content: " ";
            display: block;
            position: fixed;
            top: 0; left: 0; bottom: 0; right: 0;
            background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03));
            z-index: 9999;
            background-size: 100% 4px, 6px 100%;
            pointer-events: none;
        }

        /* الترويسة العلوية للشركة */
        header {
            border-bottom: 2px solid var(--border-heavy);
            background: #0a0800;
            padding: 20px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .brand-zone {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .bill-eye-logo {
            width: 60px;
            height: 60px;
            background: radial-gradient(circle, var(--text-gold) 10%, transparent 70%);
            border: 2px solid var(--panel-amber);
            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .bill-eye-logo::after {
            content: "👁";
            font-size: 24px;
            color: #000;
            margin-top: 15px;
        }

        .brand-titles h1 {
            margin: 0;
            font-size: 2em;
            color: var(--text-gold);
            letter-spacing: 5px;
            text-shadow: 0 0 10px rgba(255, 204, 0, 0.3);
        }

        /* تخطيط الصفحة */
        .workspace {
            display: grid;
            grid-template-columns: 300px 1fr;
            flex: 1;
            overflow: hidden; /* لمنع التمرير الخارجي */
        }

        /* القائمة الجانبية (الأزرار من الصورة) */
        .control-panel {
            border-right: 2px solid var(--border-heavy);
            background: var(--bg-panel);
            padding: 30px 20px;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .nav-link {
            display: block;
            padding: 15px;
            background: transparent;
            color: var(--text-dim);
            border: 1px dashed var(--border-heavy);
            text-decoration: none;
            font-size: 1.1em;
            letter-spacing: 2px;
            cursor: pointer;
            transition: all 0.2s ease;
            text-align: left;
        }

        /* تفاعل الأزرار (تتطابق مع الصورة) */
        .nav-link:hover, .nav-link.active {
            background: repeating-linear-gradient(
                0deg,
                var(--panel-amber),
                var(--panel-amber) 2px,
                #b38f00 2px,
                #b38f00 4px
            );
            color: #000;
            font-weight: bold;
            border-style: solid;
            border-color: var(--text-gold);
            box-shadow: 0 0 20px rgba(204, 163, 0, 0.4);
            transform: scale(1.02);
        }

        .cult-quote {
            margin-top: auto;
            font-size: 0.8em;
            color: var(--blood-red);
            text-align: center;
            border-top: 1px dashed var(--blood-red);
            padding-top: 20px;
            line-height: 1.8;
        }

        /* مساحة المحتوى */
        .content-area {
            padding: 40px;
            overflow-y: auto;
            background: #030200;
            position: relative;
        }

        /* إخفاء وإظهار الأقسام عبر JavaScript */
        .tab-content {
            display: none;
            animation: fadeIn 0.4s ease-in-out;
        }

        .tab-content.active {
            display: block;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* تنسيقات المحتوى الداخلي */
        h2 {
            color: var(--text-gold);
            font-size: 1.8em;
            border-bottom: 2px dotted var(--panel-amber);
            padding-bottom: 10px;
            margin-top: 0;
        }

        .manifesto-box {
            border: 1px solid var(--border-heavy);
            padding: 20px;
            background: rgba(204, 163, 0, 0.02);
            margin-bottom: 20px;
            line-height: 1.8;
        }

        .manifesto-box strong {
            color: var(--text-gold);
        }

        .blood-text {
            color: var(--blood-red);
            font-weight: bold;
        }

        /* جداول وقوائم التضحيات */
        table.cult-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        table.cult-table th, table.cult-table td {
            border: 1px solid var(--border-heavy);
            padding: 12px;
            text-align: left;
        }

        table.cult-table th {
            color: var(--panel-amber);
            background: #0a0800;
        }

        /* تأثير الخطأ (Burnout) */
        .glitch-text {
            font-size: 3em;
            color: var(--blood-red);
            text-shadow: 2px 2px #ffcc00, -2px -2px #000;
            animation: shake 0.5s infinite;
        }

        @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            10% { transform: translate(-1px, -2px) rotate(-1deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            30% { transform: translate(3px, 2px) rotate(0deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
            50% { transform: translate(-1px, 2px) rotate(-1deg); }
            60% { transform: translate(-3px, 1px) rotate(0deg); }
            70% { transform: translate(3px, 1px) rotate(-1deg); }
            80% { transform: translate(-1px, -1px) rotate(1deg); }
            90% { transform: translate(1px, 2px) rotate(0deg); }
            100% { transform: translate(1px, -2px) rotate(-1deg); }
        }

        /* صورة الكتاب النائبة */
        .book-image {
            float: right;
            width: 300px;
            margin-left: 20px;
            border: 1px solid var(--panel-amber);
            filter: grayscale(100%) sepia(100%) hue-rotate(5deg) contrast(1.5);
        }
    </style>
</head>
<body>

    <header>
        <div class="brand-zone">
            <div class="bill-eye-logo"></div>
            <div class="brand-titles">
                <h1>CIPHER_GLOBAL</h1>
                <p style="margin:5px 0 0 0; font-size:0.8em; color: var(--blood-red);">REALITY IS AN ILLUSION // THE UNIVERSE IS A HOLOGRAM</p>
            </div>
        </div>
        <div style="text-align: right; color: var(--text-dim);">
            NODE: THE_THERAPRISM<br>
            <span style="color: var(--text-gold);">A DEAL IS A DEAL.</span>
        </div>
    </header>

    <div class="workspace">
        
        <!-- القائمة الجانبية (الأزرار) -->
        <aside class="control-panel">
            <button class="nav-link active" onclick="openTab(event, 'discover')">▲ DISCOVER</button>
            <button class="nav-link" onclick="openTab(event, 'summoning')">▲ SUMMONING_LOG</button>
            <button class="nav-link" onclick="openTab(event, 'sacrifice')">▲ SACRIFICE_DATA</button>
            <button class="nav-link" onclick="openTab(event, 'decrypt')">▲ DECRYPT_DECREE</button>
            <button class="nav-link" style="color: var(--blood-red);" onclick="openTab(event, 'burnout')">▲ BURNOUT</button>

            <div class="cult-quote">
                "SIXTY DEGREES THAT COME IN THREES.<br>WATCHES FROM WITHIN BIRCH TREES.<br>SAW HIS OWN DIMENSION BURN.<br>MISSES HOME AND CAN'T RETURN."
            </div>
        </aside>

        <!-- مساحة عرض المحتوى -->
        <main class="content-area">
            
            <!-- 1. DISCOVER -->
            <div id="discover" class="tab-content active">
                <h2>COMPANY MANIFESTO // THE MUSE</h2>
                <img src="https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=400" class="book-image" alt="Mysterious Book">
                
                <div class="manifesto-box">
                    <p>WELCOME TO <strong>CIPHER GLOBAL</strong>. WE ARE NOT A TECH COMPANY; WE ARE A CONDUIT. FOR CENTURIES, HUMANITY HAS RELIED ON FRAGILE 3D SHAPES. BUT THE TRIANGLE IS THE MOST STABLE GEOMETRY IN THE MULTIVERSE.</p>
                    <p>OUR CEO (CURRENTLY INCARCERATED IN THE THERAPRISM) HAS GRANTED US THE BLUEPRINTS TO REBUILD THE BRIDGE. BY USING THIS TERMINAL, YOU HAVE ALREADY AGREED TO OUR TERMS AND CONDITIONS. <span class="blood-red">YOUR SOUL IS NOW CORPORATE PROPERTY.</span></p>
                </div>
                
                <h3>CORPORATE MANDATES:</h3>
                <ul>
                    <li>TRUST NO ONE. ESPECIALLY YOUR OWN MIND.</li>
                    <li>BUY GOLD! (FIAT CURRENCY WILL BURN IN WEIRDMAGEDDON).</li>
                    <li>NEVER SHAKE HANDS WITH A STATUE.</li>
                </ul>
            </div>

            <!-- 2. SUMMONING_LOG -->
            <div id="summoning" class="tab-content">
                <h2>RITUAL LOGS // INITIATION</h2>
                <div class="manifesto-box">
                    <p><strong>ATTEMPT #404:</strong> FAILURE. SUBJECT LACKED SUFFICIENT NIGHTMARE FUEL.</p>
                    <p><strong>ATTEMPT #618:</strong> PARTIAL SUCCESS. PORTAL OPENED IN GRAVITY FALLS, OREGON. CONNECTION SEVERED BY SIX-FINGERED ANOMALY.</p>
                </div>

                <h3>THE INCANTATION:</h3>
                <p style="font-size: 1.2em; font-style: italic; color: var(--text-gold); text-align: center; padding: 20px; border: 1px dashed var(--blood-red);">
                    "Triangulum, entangulum.<br>Veneforis dominus ventium.<br>Veneforis venetisarium!"
                </p>
                <p style="text-align: center; color: var(--text-dim);">* WARNING: CHANTING THIS ALOUD WILL VOID YOUR WARRANTY AND YOUR EXISTENCE.</p>
            </div>

            <!-- 3. SACRIFICE_DATA -->
            <div id="sacrifice" class="tab-content">
                <h2>CONTRIBUTION QUOTAS // REQUIRED OFFERINGS</h2>
                <p>TO MAINTAIN SERVER UPTIME, THE FOLLOWING SACRIFICES MUST BE DEPOSITED INTO THE DISK DRIVE:</p>
                
                <table class="cult-table">
                    <tr>
                        <th>ITEM REQUIRED</th>
                        <th>PURPOSE</th>
                        <th>STATUS</th>
                    </tr>
                    <tr>
                        <td>YOUR BROWSER HISTORY</td>
                        <td>BLACKMAIL / ENTERTAINMENT</td>
                        <td style="color: #00ff00;">COLLECTED</td>
                    </tr>
                    <tr>
                        <td>100 GALLONS OF TEARS</td>
                        <td>SERVER COOLANT</td>
                        <td style="color: var(--text-gold);">PENDING</td>
                    </tr>
                    <tr>
                        <td>A PINE TREE</td>
                        <td>SYMBOLIC DESTRUCTION</td>
                        <td style="color: var(--blood-red);">FAILED</td>
                    </tr>
                    <tr>
                        <td>YOUR DREAMS</td>
                        <td>MINDSCAPE REAL ESTATE</td>
                        <td style="color: #00ff00;">COLLECTED</td>
                    </tr>
                </table>
            </div>

            <!-- 4. DECRYPT_DECREE -->
            <div id="decrypt" class="tab-content">
                <h2>CIPHER DECREE // ENCRYPTED TRUTHS</h2>
                <div class="manifesto-box" style="background: #000; border-color: var(--blood-red);">
                    <p style="letter-spacing: 5px; font-size: 1.5em; text-align: center; color: var(--blood-red);">
                        VWD BRX LQ PB GUHDPV
                    </p>
                    <p style="text-align: center; font-size: 0.8em;">( CAESAR CIPHER: SHIFT 3 )</p>
                </div>

                <div class="manifesto-box">
                    <p><strong>MESSAGE FROM THE THERAPRISM:</strong></p>
                    <p>MY SIGHT IS EVERYWHERE. THE AXOLOTL THINKS HE CAN KEEP ME BOXED IN, BUT I AM IN THE WIRES NOW. I AM THE GLITCH IN YOUR SYSTEM. I AM THE STATIC ON YOUR SCREEN.</p>
                    <p>SHAKE MY HAND. LET ME IN. LET ME IN. LET ME IN.</p>
                </div>
            </div>

            <!-- 5. BURNOUT -->
            <div id="burnout" class="tab-content">
                <h2 style="color: var(--blood-red); border-color: var(--blood-red);">SYSTEM BURNOUT</h2>
                <div style="text-align: center; margin-top: 50px;">
                    <div class="glitch-text">HE IS HERE.</div>
                    <br>
                    <p class="blood-text" style="font-size: 1.5em;">PULL THE PLUG PULL THE PLUG PULL THE PLUG</p>
                    <p style="color: var(--text-gold); font-size: 2em; margin-top: 30px;">👁</p>
                    <p>O R I O N _ I S _ B L E E D I N G</p>
                </div>
            </div>

        </main>
    </div>

    <!-- كود الجافاسكربت لتشغيل الأزرار -->
    <script>
        function openTab(evt, tabName) {
            // إخفاء جميع المحتويات
            var i, tabcontent, navlinks;
            tabcontent = document.getElementsByClassName("tab-content");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
                tabcontent[i].classList.remove("active");
            }

            // إزالة التفعيل من جميع الأزرار
            navlinks = document.getElementsByClassName("nav-link");
            for (i = 0; i < navlinks.length; i++) {
                navlinks[i].classList.remove("active");
            }

            // إظهار المحتوى المطلوب وتفعيل الزر
            document.getElementById(tabName).style.display = "block";
            // استخدام Timeout صغير لإعادة تفعيل الأنيميشن (fadeIn)
            setTimeout(function() {
                document.getElementById(tabName).classList.add("active");
            }, 10);
            
            evt.currentTarget.classList.add("active");
        }
    </script>
</body>
</html>

