param(
    [switch]$Force
)

$root = "C:\Users\msvn\OneDrive - Hulamin Limited\Documents\MSVN\Personal\huntress-cookbook"
$mapPath = Join-Path $root "data\image-map.json"
$outDir = Join-Path $root "assets\images"
$map = Get-Content $mapPath -Raw | ConvertFrom-Json
$ua = @{ "User-Agent" = "HuntressCookbook/1.0" }

$ok = 0; $skip = 0; $fail = 0
foreach ($prop in $map.PSObject.Properties) {
    if ($prop.Name -eq "_note") { continue }
    $file = $prop.Name
    $url = $prop.Value
    $dest = Join-Path $outDir $file

    if ((Test-Path $dest) -and -not $Force) {
        Write-Host "SKIP $file (already exists — use -Force to replace)"
        $skip++
        continue
    }

    try {
        Invoke-WebRequest -Uri $url -OutFile $dest -Headers $ua -UseBasicParsing -TimeoutSec 90
        $size = (Get-Item $dest).Length
        if ($size -lt 10000) { throw "Too small ($size bytes) - likely not a photo" }
        Write-Host "OK $file ($([math]::Round($size/1024))KB)"
        $ok++
    } catch {
        Write-Host "FAIL $file - $_"
        $fail++
    }
    Start-Sleep -Milliseconds 250
}
Write-Host "Downloaded $ok images, skipped $skip, $fail failed"
