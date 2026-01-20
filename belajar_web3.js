require('dotenv').config();
const { ethers } = require("ethers");

async function main() {
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

    console.log("🚀 Menyiapkan transaksi Self-Transfer...");

    // Gunakan alamat dompet Anda sendiri yang sudah pasti valid
    const tujuanRaw = "0xC9aC55f435E4EB9ed09087B6329954374ac94b80";
    
    try {
        // Fungsi getAddress akan memvalidasi alamat secara ketat
        const tujuan = ethers.getAddress(tujuanRaw.trim()); 

        const tx = {
            to: tujuan,
            value: ethers.parseEther("0.001"), // Kirim 0.001 ETH ke diri sendiri
            data: ethers.hexlify(ethers.toUtf8Bytes("Self-transfer pertama sukses!"))
        };

        console.log("⏳ Sedang mengirim ke Blockchain Sepolia...");
        const response = await wallet.sendTransaction(tx);
        
        console.log("\n✅ BERHASIL TOTAL!");
        console.log("-----------------------------------------");
        console.log("Hash Transaksi:", response.hash);
        console.log("Cek statusnya di sini:");
        console.log("https://sepolia.etherscan.io/tx/" + response.hash);
        console.log("-----------------------------------------");
        
    } catch (error) {
        console.error("\n❌ Masih ada kendala:");
        console.error(error.message);
    }
}

main();

