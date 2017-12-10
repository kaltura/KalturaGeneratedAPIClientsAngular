
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaGenericDistributionProviderParser } from './KalturaGenericDistributionProviderParser';
import { KalturaDistributionJobProviderData, KalturaDistributionJobProviderDataArgs } from './KalturaDistributionJobProviderData';

export interface KalturaGenericDistributionJobProviderDataArgs  extends KalturaDistributionJobProviderDataArgs {
    xml? : string;
	resultParseData? : string;
	resultParserType? : KalturaGenericDistributionProviderParser;
}


export class KalturaGenericDistributionJobProviderData extends KalturaDistributionJobProviderData {

    xml : string;
	resultParseData : string;
	resultParserType : KalturaGenericDistributionProviderParser;

    constructor(data? : KalturaGenericDistributionJobProviderDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGenericDistributionJobProviderData' },
				xml : { type : 's' },
				resultParseData : { type : 's' },
				resultParserType : { type : 'en', subTypeConstructor : KalturaGenericDistributionProviderParser, subType : 'KalturaGenericDistributionProviderParser' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGenericDistributionJobProviderData',KalturaGenericDistributionJobProviderData);
