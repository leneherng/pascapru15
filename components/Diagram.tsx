import clsx from "clsx";

export default function Diagram(
    { count, PH, PN, BN, GPS, GRS, others }: 
    { count: number, PH: number, PN: number, BN: number, GPS: number, GRS: number, others: number}) {
    return (
        <svg className="" width="360" height="185">
            <g>
                <text x="180" y="175"
                    fill="#FFFFFF" fontSize="36px" font-weight="bold" text-align="center" text-anchor="middle" font-family="sans-serif">{count}</text>
                <g className={clsx(PH ? "opacity-100" : "opacity-20")} fill="#FF2A2A" id="PH"><title>Pakatan Harapan</title>
                    <circle cx="11.32" cy="175.00" r="5.00" />
                    <circle cx="23.83" cy="175.00" r="5.00" />
                    <circle cx="36.34" cy="175.00" r="5.00" />
                    <circle cx="48.85" cy="175.00" r="5.00" />
                    <circle cx="61.36" cy="175.00" r="5.00" />
                    <circle cx="73.87" cy="175.00" r="5.00" />
                    <circle cx="86.38" cy="175.00" r="5.00" />
                    <circle cx="98.90" cy="175.01" r="5.00" />
                    <circle cx="12.32" cy="160.98" r="5.00" />
                    <circle cx="24.92" cy="160.91" r="5.00" />
                    <circle cx="37.54" cy="160.81" r="5.00" />
                    <circle cx="50.18" cy="160.70" r="5.00" />
                    <circle cx="62.85" cy="160.57" r="5.00" />
                    <circle cx="75.57" cy="160.40" r="5.00" />
                    <circle cx="14.49" cy="147.10" r="5.00" />
                    <circle cx="88.21" cy="160.91" r="5.00" />
                    <circle cx="27.28" cy="146.97" r="5.00" />
                    <circle cx="40.13" cy="146.81" r="5.00" />
                    <circle cx="101.06" cy="160.76" r="5.00" />
                    <circle cx="53.06" cy="146.63" r="5.00" />
                    <circle cx="17.80" cy="133.44" r="5.00" />
                    <circle cx="66.10" cy="146.42" r="5.00" />
                    <circle cx="30.89" cy="133.30" r="5.00" />
                    <circle cx="79.28" cy="146.17" r="5.00" />
                    <circle cx="44.10" cy="133.14" r="5.00" />
                    <circle cx="92.15" cy="147.25" r="5.00" />
                    <circle cx="22.24" cy="120.10" r="5.00" />
                    <circle cx="57.47" cy="132.96" r="5.00" />
                    <circle cx="35.73" cy="120.01" r="5.00" />
                    <circle cx="71.04" cy="132.78" r="5.00" />
                    <circle cx="105.70" cy="147.12" r="5.00" />
                    <circle cx="49.41" cy="119.92" r="5.00" />
                    <circle cx="27.77" cy="107.18" r="5.00" />
                    <circle cx="84.92" cy="132.58" r="5.00" />
                    <circle cx="63.34" cy="119.86" r="5.00" />
                    <circle cx="41.74" cy="107.21" r="5.00" />
                    <circle cx="98.11" cy="134.35" r="5.00" />
                    <circle cx="34.36" cy="94.77" r="5.00" />
                    <circle cx="55.99" cy="107.30" r="5.00" />
                    <circle cx="77.62" cy="119.84" r="5.00" />
                    <circle cx="48.88" cy="95.01" r="5.00" />
                    <circle cx="70.61" cy="107.47" r="5.00" />
                    <circle cx="112.68" cy="134.51" r="5.00" />
                    <circle cx="92.38" cy="119.91" r="5.00" />
                    <circle cx="41.95" cy="82.95" r="5.00" />
                    <circle cx="63.79" cy="95.38" r="5.00" />
                    <circle cx="85.72" cy="107.80" r="5.00" />
                    <circle cx="105.96" cy="122.50" r="5.00" />
                    <circle cx="57.10" cy="83.51" r="5.00" />
                    <circle cx="79.19" cy="95.95" r="5.00" />
                    <circle cx="50.51" cy="71.80" r="5.00" />
                    <circle cx="72.73" cy="84.30" r="5.00" />
                    <circle cx="101.51" cy="108.38" r="5.00" />
                    <circle cx="66.33" cy="72.79" r="5.00" />
                    <circle cx="121.77" cy="123.34" r="5.00" />
                    <circle cx="95.23" cy="96.83" r="5.00" />
                    <circle cx="59.96" cy="61.40" r="5.00" />
                    <circle cx="88.98" cy="85.44" r="5.00" />
                    <circle cx="115.50" cy="111.97" r="5.00" />
                    <circle cx="82.73" cy="74.16" r="5.00" />
                    <circle cx="76.49" cy="62.96" r="5.00" />
                    <circle cx="70.25" cy="51.82" r="5.00" />
                    <circle cx="112.15" cy="98.23" r="5.00" />
                    <circle cx="106.01" cy="87.12" r="5.00" />
                    <circle cx="99.85" cy="76.06" r="5.00" />
                    <circle cx="93.68" cy="65.05" r="5.00" />
                    <circle cx="87.49" cy="54.08" r="5.00" />
                    <circle cx="81.29" cy="43.13" r="5.00" />
                    <circle cx="132.69" cy="113.94" r="5.00" />
                    <circle cx="126.52" cy="103.00" r="5.00" />
                    <circle cx="124.09" cy="89.65" r="5.00" />
                    <circle cx="117.90" cy="78.78" r="5.00" />
                    <circle cx="111.69" cy="67.93" r="5.00" />
                    <circle cx="105.47" cy="57.08" r="5.00" />
                    <circle cx="99.25" cy="46.23" r="5.00" />
                    <circle cx="93.02" cy="35.39" r="5.00" />
                    <circle cx="105.36" cy="28.66" r="5.00" />
                    <circle cx="138.78" cy="95.80" r="5.00" />
                    <circle cx="111.67" cy="39.48" r="5.00" />
                    <circle cx="118.00" cy="50.31" r="5.00" />
                    <circle cx="145.11" cy="106.62" r="5.00" />
                    <circle cx="124.34" cy="61.14" r="5.00" />
                    </g>
                <g className={clsx(PN ? "opacity-100" : "opacity-20")} fill="#002255" stroke-width="0.00" stroke="#000000" id="PN"> <title>Perikatan Nasional</title>
                    <circle cx="130.71" cy="71.96" r="5.00" />
                    <circle cx="137.11" cy="82.79" r="5.00" />
                    <circle cx="118.21" cy="22.97" r="5.00" />
                    <circle cx="124.65" cy="33.88" r="5.00" />
                    <circle cx="131.13" cy="44.81" r="5.00" />
                    <circle cx="137.66" cy="55.77" r="5.00" />
                    <circle cx="144.26" cy="66.76" r="5.00" />
                    <circle cx="151.98" cy="90.53" r="5.00" />
                    <circle cx="131.49" cy="18.37" r="5.00" />
                    <circle cx="150.94" cy="77.80" r="5.00" />
                    <circle cx="138.09" cy="29.48" r="5.00" />
                    <circle cx="158.61" cy="101.61" r="5.00" />
                    <circle cx="144.75" cy="40.64" r="5.00" />
                    <circle cx="151.49" cy="51.88" r="5.00" />
                    <circle cx="145.11" cy="14.90" r="5.00" />
                    <circle cx="158.34" cy="63.24" r="5.00" />
                    <circle cx="151.87" cy="26.30" r="5.00" />
                    <circle cx="165.83" cy="87.33" r="5.00" />
                    <circle cx="158.71" cy="37.84" r="5.00" />
                    <circle cx="165.33" cy="74.77" r="5.00" />
                    <circle cx="158.97" cy="12.57" r="5.00" />
                    <circle cx="165.66" cy="49.54" r="5.00" />
                    <circle cx="165.88" cy="24.39" r="5.00" />
                    <circle cx="172.80" cy="99.07" r="5.00" />
                    <circle cx="172.74" cy="61.47" r="5.00" />
                    <circle cx="172.88" cy="36.43" r="5.00" />
                    <circle cx="172.97" cy="11.40" r="5.00" />
                    <circle cx="180.00" cy="23.75" r="5.00" />
                    <circle cx="180.00" cy="48.75" r="5.00" />
                    <circle cx="180.00" cy="73.75" r="5.00" />
                    <circle cx="180.00" cy="86.25" r="5.00" />
                    <circle cx="187.03" cy="11.40" r="5.00" />
                    <circle cx="187.12" cy="36.43" r="5.00" />
                    <circle cx="187.26" cy="61.47" r="5.00" />
                    <circle cx="187.20" cy="99.07" r="5.00" />
                    <circle cx="194.12" cy="24.39" r="5.00" />
                    <circle cx="194.34" cy="49.54" r="5.00" />
                    <circle cx="201.03" cy="12.57" r="5.00" />
                    <circle cx="194.67" cy="74.77" r="5.00" />
                    <circle cx="201.29" cy="37.84" r="5.00" />
                    <circle cx="194.17" cy="87.33" r="5.00" />
                    <circle cx="208.13" cy="26.30" r="5.00" />
                    <circle cx="201.66" cy="63.24" r="5.00" />
                    <circle cx="214.89" cy="14.90" r="5.00" />
                    <circle cx="208.51" cy="51.88" r="5.00" />
                    <circle cx="215.25" cy="40.64" r="5.00" />
                    <circle cx="201.39" cy="101.61" r="5.00" />
                    <circle cx="221.91" cy="29.48" r="5.00" />
                    <circle cx="209.06" cy="77.80" r="5.00" />
                    <circle cx="228.51" cy="18.37" r="5.00" />
                    <circle cx="208.02" cy="90.53" r="5.00" />
                    <circle cx="215.74" cy="66.76" r="5.00" />
                    <circle cx="222.34" cy="55.77" r="5.00" />
                    <circle cx="228.87" cy="44.81" r="5.00" />
                    <circle cx="235.35" cy="33.88" r="5.00" />
                    <circle cx="241.79" cy="22.97" r="5.00" />
                    <circle cx="222.89" cy="82.79" r="5.00" />
                    <circle cx="229.29" cy="71.96" r="5.00" />
                    <circle cx="235.66" cy="61.14" r="5.00" />
                    <circle cx="214.89" cy="106.62" r="5.00" />
                    <circle cx="242.00" cy="50.31" r="5.00" />
                    <circle cx="248.33" cy="39.48" r="5.00" />
                    <circle cx="221.22" cy="95.80" r="5.00" />
                    <circle cx="254.64" cy="28.66" r="5.00" />
                    <circle cx="266.98" cy="35.39" r="5.00" />
                    <circle cx="260.75" cy="46.23" r="5.00" />
                    <circle cx="254.53" cy="57.08" r="5.00" />
                    <circle cx="248.31" cy="67.93" r="5.00" />
                    <circle cx="242.10" cy="78.78" r="5.00" />
                    <circle cx="235.91" cy="89.65" r="5.00" />
                    <circle cx="233.48" cy="103.00" r="5.00" />
                    <circle cx="227.31" cy="113.94" r="5.00" />
                    <circle cx="278.71" cy="43.13" r="5.00" />
                <circle cx="272.51" cy="54.08" r="5.00" />
                </g>
                <g className={clsx(BN ? "opacity-100" : "opacity-20")} fill="#000080" stroke-width="0.00" stroke="#000000"
                    id="BN">
                    <title>Barisan Nasional</title>
                    <circle cx="266.32" cy="65.05" r="5.00" />
                    <circle cx="260.15" cy="76.06" r="5.00" />
                    <circle cx="253.99" cy="87.12" r="5.00" />
                    <circle cx="247.85" cy="98.23" r="5.00" />
                    <circle cx="289.75" cy="51.82" r="5.00" />
                    <circle cx="283.51" cy="62.96" r="5.00" />
                    <circle cx="277.27" cy="74.16" r="5.00" />
                    <circle cx="244.50" cy="111.97" r="5.00" />
                    <circle cx="271.02" cy="85.44" r="5.00" />
                    <circle cx="300.04" cy="61.40" r="5.00" />
                    <circle cx="264.77" cy="96.83" r="5.00" />
                    <circle cx="238.23" cy="123.34" r="5.00" />
                    <circle cx="293.67" cy="72.79" r="5.00" />
                    <circle cx="258.49" cy="108.38" r="5.00" />
                    <circle cx="287.27" cy="84.30" r="5.00" />
                    <circle cx="309.49" cy="71.80" r="5.00" />
                    <circle cx="280.81" cy="95.95" r="5.00" />
                    <circle cx="302.90" cy="83.51" r="5.00" />
                    <circle cx="254.04" cy="122.50" r="5.00" />
                    <circle cx="274.28" cy="107.80" r="5.00" />
                    <circle cx="296.21" cy="95.38" r="5.00" />
                    <circle cx="318.05" cy="82.95" r="5.00" />
                    <circle cx="267.62" cy="119.91" r="5.00" />
                    <circle cx="247.32" cy="134.51" r="5.00" />
                    <circle cx="289.39" cy="107.47" r="5.00" />
                    <circle cx="311.12" cy="95.01" r="5.00" />
                    <circle cx="282.38" cy="119.84" r="5.00" />
                    <circle cx="304.01" cy="107.30" r="5.00" />
                    <circle cx="325.64" cy="94.77" r="5.00" />
                <circle cx="261.89" cy="134.35" r="5.00" />
                </g>
                <g className={clsx(GPS ? "opacity-100" : "opacity-20")} fill="#e11d48" stroke-width="0.00" stroke="#000000"
                    id="GPS">
                    <title>Gabungan Parti Sarawak</title>
                    <circle cx="318.26" cy="107.21" r="5.00" />
                    <circle cx="296.66" cy="119.86" r="5.00" />
                    <circle cx="275.08" cy="132.58" r="5.00" />
                    <circle cx="332.23" cy="107.18" r="5.00" />
                    <circle cx="310.59" cy="119.92" r="5.00" />
                    <circle cx="254.30" cy="147.12" r="5.00" />
                    <circle cx="288.96" cy="132.78" r="5.00" />
                    <circle cx="324.27" cy="120.01" r="5.00" />
                    <circle cx="302.53" cy="132.96" r="5.00" />
                    <circle cx="337.76" cy="120.10" r="5.00" />
                    <circle cx="267.85" cy="147.25" r="5.00" />
                    <circle cx="315.90" cy="133.14" r="5.00" />
                    <circle cx="280.72" cy="146.17" r="5.00" />
                    <circle cx="329.11" cy="133.30" r="5.00" />
                    <circle cx="293.90" cy="146.42" r="5.00" />
                    <circle cx="342.20" cy="133.44" r="5.00" />
                    <circle cx="306.94" cy="146.63" r="5.00" />
                    <circle cx="258.94" cy="160.76" r="5.00" />
                    <circle cx="319.87" cy="146.81" r="5.00" />
                    <circle cx="332.72" cy="146.97" r="5.00" />
                    <circle cx="271.79" cy="160.91" r="5.00" />
                    <circle cx="345.51" cy="147.10" r="5.00" />
                <circle cx="284.43" cy="160.40" r="5.00" />
                </g>
                <g className={clsx(GRS ? "opacity-100" : "opacity-20")} fill="#0891b2" stroke-width="0.00" stroke="#000000"
                    id="GRS">
                    <title>Gabungan Rakyat Sabah</title>
                    <circle cx="297.15" cy="160.57" r="5.00" />
                    <circle cx="309.82" cy="160.70" r="5.00" />
                    <circle cx="322.46" cy="160.81" r="5.00" />
                    <circle cx="335.08" cy="160.91" r="5.00" />
                    <circle cx="347.68" cy="160.98" r="5.00" />
                    <circle cx="261.10" cy="175.01" r="5.00" />
                </g>
                <g className={clsx(others ? "opacity-100" : "opacity-20")} fill="#581c87" stroke-width="0.00" stroke="#000000" id="6_Party-7">
                    <title>Others</title>
                    <circle cx="298.64" cy="175.00" r="5.00" />
                    <circle cx="273.62" cy="175.00" r="5.00" />
                    <circle cx="286.13" cy="175.00" r="5.00" />
                    <circle cx="311.15" cy="175.00" r="5.00" />
                    <circle cx="323.66" cy="175.00" r="5.00" />
                    <circle cx="336.17" cy="175.00" r="5.00" />
                <circle cx="348.68" cy="175.00" r="5.00" />
                </g>
            </g>
        </svg>

    );
}