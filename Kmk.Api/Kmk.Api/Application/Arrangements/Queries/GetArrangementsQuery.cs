using Kmk.Api.Domain.Arrangements;
using Kmk.Persistence;

namespace Kmk.Api.Application.Arrangements.Queries;

public class GetArrangementsQuery
{
    public string Sorting { get; set; } = string.Empty;
    public string Filter { get; set; } = string.Empty;
}

public class GetArrangementsQueryHandler
{
    KmkContext _context;

    public GetArrangementsQueryHandler(KmkContext context)
    { 
        _context = context; 
    }

    public List<Arrangement> Handle(GetArrangementsQuery request)
    {
        var query = _context.Arrangement
            .Where(x => x.Title.Contains(request.Filter) || 
                        x.Composer.Contains(request.Filter) ||
                        x.Arranger.Contains(request.Filter));

        if (request.Sorting == "title")
            query = query.OrderBy(x => x.Title);
        else if (request.Sorting == "compsoer")
            query = query.OrderBy(x => x.Composer);
        else if (request.Sorting == "arranger")
            query = query.OrderBy(x => x.Arranger);
        else
            query = query.OrderBy(x => x.SerialNumber);

        return query.ToList();
    }
}