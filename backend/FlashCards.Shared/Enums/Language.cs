using System.Text.Json.Serialization;

namespace FlashCards.Shared.Enums;

[JsonConverter(typeof(JsonStringEnumConverter))]
public enum Language
{
    English,
    Dutch,
    Polish
}
