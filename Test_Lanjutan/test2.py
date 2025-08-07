kalimat = "Saya sangat senang mengerjakan soal algoritma"
kata_terpanjang = max(kalimat.split(), key=len)
print(f"{kata_terpanjang}: {len(kata_terpanjang)} character")
