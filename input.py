
import lzma, base64
exec(lzma.decompress(base64.b64decode('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')))
